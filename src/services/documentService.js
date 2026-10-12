// Flow 2, step "Upload related documents".
//
// NOT UPLOADED: there is no file API yet, so nothing is sent anywhere.
// This only turns the picked files into metadata (name, size, type) that the asset keeps.
// The file contents are not read or stored.
//
// Backend hook-up: replace the body with a real upload that follows the backend's API
// contract (for example multipart upload or pre-signed URLs) and return the server's
// document ids instead of the local ones.

export const UPLOAD_STATUS = {
  NOT_UPLOADED_DEMO: 'NOT_UPLOADED_DEMO',
}

// Input:  [{ id, file, name, size, type }] from documentRules.checkNewFiles
// Output: [{ id, name, size, type, uploadStatus }]
export async function prepareDocuments(pickedFiles) {
  await new Promise((resolve) => setTimeout(resolve, 400))
  return pickedFiles.map(({ id, name, size, type }) => ({
    id: `doc-${id}`,
    name,
    size,
    type,
    uploadStatus: UPLOAD_STATUS.NOT_UPLOADED_DEMO,
  }))
}
