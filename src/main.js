require("dotenv").config()
const { DefaultAzureCredential } = require("@azure/identity");
const { BlobServiceClient } = require("@azure/storage-blob");


// Enter your storage account name
const account = process.env.AZURE_SA_NAME
const defaultAzureCredential = new DefaultAzureCredential();

const blobServiceClient = new BlobServiceClient(
    `https://${account}.blob.core.windows.net`,
    defaultAzureCredential
);

const containerName = "quickstartsacontainer";

async function main() {
    let i = 1;
    let containers = blobServiceClient.listContainers();
    for await (const container of containers) {
        console.log(`Container ${i++}: ${container.name}`);
    }
}


async function listFiles() {
    const containerClient = blobServiceClient.getContainerClient(containerName);

    let i = 1;
    let blobs = containerClient.listBlobsFlat();
    for await (const blob of blobs) {
        console.log(`Blob ${i++}: ${blob.name}`);
        if (blob) {
            fetchFile(blob.name)
        }
    }
}


async function fetchFile(blobName) {
    const containerClient = blobServiceClient.getContainerClient(containerName);
    const blobClient = containerClient.getBlobClient(blobName);
    blobClient.downloadToFile(blobName)
}

main();
listFiles()
