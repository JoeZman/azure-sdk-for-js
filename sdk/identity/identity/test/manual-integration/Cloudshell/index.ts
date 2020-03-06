// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SecretClient } from "@azure/keyvault-secrets";
import { DefaultAzureCredential } from "@azure/identity";

async function main(): Promise<void> {
  const credential = new DefaultAzureCredential();

  const url = "https://" + process.env.KEY_VAULT_NAME + ".vault.azure.net";
  const client = new SecretClient(url, credential);

  await client.setSecret("secret-name-cloudshell", "secret-value-cloudshell");
}

main().catch((err) => {
  console.log("error code: ", err.code);
  console.log("error message: ", err.message);
  console.log("error stack: ", err.stack);
});