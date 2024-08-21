import path from "path";
import fs from "fs/promises";
import { Client } from "minio";
import errorHandler from "@/lib/errorHandler";

const client = new Client({
  endPoint: "objectstorageapi.bja.sealos.run",
  accessKey: "3vlgbm4j",
  secretKey: "vlx27nj4bqlv5rqv",
});

const bucketName = "3vlgbm4j-xunpanziyou-com";

interface FailedReplacement {
  file: string;
  imgUrl: string;
  error: string;
}

const failedReplacements: FailedReplacement[] = [];

const getAllMdxFiles = async (): Promise<string[]> => {
  const articlesDir = path.join(__dirname, "../app/articles");
  const slugDirs = await fs.readdir(articlesDir);
  const mdxFiles: string[] = [];

  for (const slug of slugDirs) {
    const slugDir = path.join(articlesDir, slug);
    const stats = await fs.stat(slugDir);
    if (stats.isDirectory()) {
      const files = await fs.readdir(slugDir);
      const mdxFile = files.find((file) => file === "page.mdx");
      if (mdxFile) {
        mdxFiles.push(path.join(slug, mdxFile));
      }
    }
  }

  return mdxFiles;
};

const uploadImg = async (imgUrl: string, slug: string, imgFileName: string) => {
  const response = await fetch(imgUrl);
  const buffer = await response.arrayBuffer();
  const objectName = `${slug}/${imgFileName}`;
  await client.putObject(bucketName, objectName, Buffer.from(buffer));
  return objectName;
};

const processImageInContent = async (
  content: string,
  fileName: string,
): Promise<string> => {
  const imgRegex = /<Image\s+src=\{\s*"([^"]+)"\s*\}[^>]*>/g;
  const matches = content.matchAll(imgRegex);
  const totalCount = Array.from(content.matchAll(imgRegex)).length;
  let matchesCount = 0;
  const slug = path.dirname(fileName);

  for (const match of matches) {
    const imgUrl = match[1];
    const imgFileName = imgUrl.split("/").pop();

    if (imgFileName) {
      try {
        const objectName = await uploadImg(imgUrl, slug, imgFileName);
        const newUrl = `https://objectstorageapi.bja.sealos.run/${bucketName}/${objectName}`;
        content = content.replace(imgUrl, newUrl);
        console.log(`Replaced image ${imgUrl} with ${newUrl}`);
      } catch (error) {
        failedReplacements.push({
          file: fileName,
          imgUrl,
          error: errorHandler(error),
        });
        console.error(
          `Failed to process image ${imgUrl}: ${errorHandler(error)}`,
        );
      }
    }
    matchesCount++;
    console.log(`Processed ${matchesCount} images out of ${totalCount}.`);
  }

  return content;
};

const main = async () => {
  const files = await getAllMdxFiles();

  for (const file of files) {
    const filePath = path.join(__dirname, "../app/articles", file);
    let content = await fs.readFile(filePath, "utf-8");

    content = await processImageInContent(content, file);

    await fs.writeFile(filePath, content, "utf-8");
    console.log(`Processed file: ${file}`);
  }

  console.log("Image processing completed.");

  if (failedReplacements.length > 0) {
    console.log("\nFailed image replacements:");
    failedReplacements.forEach(({ file, imgUrl, error }) => {
      console.log(`File: ${file}`);
      console.log(`Image URL: ${imgUrl}`);
      console.log(`Error: ${error}`);
      console.log("---");
    });
  } else {
    console.log("All images were processed successfully.");
  }
};

main().catch(console.error);
