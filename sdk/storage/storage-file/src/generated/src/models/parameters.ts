/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";

export const comp0: coreHttp.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'properties',
    type: {
      name: "String"
    }
  }
};
export const comp1: coreHttp.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'list',
    type: {
      name: "String"
    }
  }
};
export const comp10: coreHttp.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'rangelist',
    type: {
      name: "String"
    }
  }
};
export const comp11: coreHttp.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'copy',
    type: {
      name: "String"
    }
  }
};
export const comp2: coreHttp.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'snapshot',
    type: {
      name: "String"
    }
  }
};
export const comp3: coreHttp.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'filepermission',
    type: {
      name: "String"
    }
  }
};
export const comp4: coreHttp.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'metadata',
    type: {
      name: "String"
    }
  }
};
export const comp5: coreHttp.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'acl',
    type: {
      name: "String"
    }
  }
};
export const comp6: coreHttp.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'stats',
    type: {
      name: "String"
    }
  }
};
export const comp7: coreHttp.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'listhandles',
    type: {
      name: "String"
    }
  }
};
export const comp8: coreHttp.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'forceclosehandles',
    type: {
      name: "String"
    }
  }
};
export const comp9: coreHttp.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'range',
    type: {
      name: "String"
    }
  }
};
export const contentLength: coreHttp.OperationParameter = {
  parameterPath: "contentLength",
  mapper: {
    required: true,
    serializedName: "Content-Length",
    type: {
      name: "Number"
    }
  }
};
export const contentMD5: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "contentMD5"
  ],
  mapper: {
    serializedName: "Content-MD5",
    type: {
      name: "ByteArray"
    }
  }
};
export const copyActionAbortConstant: coreHttp.OperationParameter = {
  parameterPath: "copyActionAbortConstant",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "x-ms-copy-action",
    defaultValue: 'abort',
    type: {
      name: "String"
    }
  }
};
export const copyId: coreHttp.OperationQueryParameter = {
  parameterPath: "copyId",
  mapper: {
    required: true,
    serializedName: "copyid",
    type: {
      name: "String"
    }
  }
};
export const copySource: coreHttp.OperationParameter = {
  parameterPath: "copySource",
  mapper: {
    required: true,
    serializedName: "x-ms-copy-source",
    type: {
      name: "String"
    }
  }
};
export const deleteSnapshots: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "deleteSnapshots"
  ],
  mapper: {
    serializedName: "x-ms-delete-snapshots",
    type: {
      name: "Enum",
      allowedValues: [
        "include"
      ]
    }
  }
};
export const fileAttributes: coreHttp.OperationParameter = {
  parameterPath: "fileAttributes",
  mapper: {
    required: true,
    serializedName: "x-ms-file-attributes",
    type: {
      name: "String"
    }
  }
};
export const fileCacheControl: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "fileHTTPHeaders",
    "fileCacheControl"
  ],
  mapper: {
    serializedName: "x-ms-cache-control",
    type: {
      name: "String"
    }
  }
};
export const fileContentDisposition: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "fileHTTPHeaders",
    "fileContentDisposition"
  ],
  mapper: {
    serializedName: "x-ms-content-disposition",
    type: {
      name: "String"
    }
  }
};
export const fileContentEncoding: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "fileHTTPHeaders",
    "fileContentEncoding"
  ],
  mapper: {
    serializedName: "x-ms-content-encoding",
    type: {
      name: "String"
    }
  }
};
export const fileContentLanguage: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "fileHTTPHeaders",
    "fileContentLanguage"
  ],
  mapper: {
    serializedName: "x-ms-content-language",
    type: {
      name: "String"
    }
  }
};
export const fileContentLength0: coreHttp.OperationParameter = {
  parameterPath: "fileContentLength",
  mapper: {
    required: true,
    serializedName: "x-ms-content-length",
    type: {
      name: "Number"
    }
  }
};
export const fileContentLength1: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "fileContentLength"
  ],
  mapper: {
    serializedName: "x-ms-content-length",
    type: {
      name: "Number"
    }
  }
};
export const fileContentMD5: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "fileHTTPHeaders",
    "fileContentMD5"
  ],
  mapper: {
    serializedName: "x-ms-content-md5",
    type: {
      name: "ByteArray"
    }
  }
};
export const fileContentType: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "fileHTTPHeaders",
    "fileContentType"
  ],
  mapper: {
    serializedName: "x-ms-content-type",
    type: {
      name: "String"
    }
  }
};
export const fileCreationTime: coreHttp.OperationParameter = {
  parameterPath: "fileCreationTime",
  mapper: {
    required: true,
    serializedName: "x-ms-file-creation-time",
    type: {
      name: "String"
    }
  }
};
export const fileLastWriteTime: coreHttp.OperationParameter = {
  parameterPath: "fileLastWriteTime",
  mapper: {
    required: true,
    serializedName: "x-ms-file-last-write-time",
    type: {
      name: "String"
    }
  }
};
export const filePermission: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "filePermission"
  ],
  mapper: {
    serializedName: "x-ms-file-permission",
    type: {
      name: "String"
    }
  }
};
export const filePermissionKey0: coreHttp.OperationParameter = {
  parameterPath: "filePermissionKey",
  mapper: {
    required: true,
    serializedName: "x-ms-file-permission-key",
    type: {
      name: "String"
    }
  }
};
export const filePermissionKey1: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "filePermissionKey"
  ],
  mapper: {
    serializedName: "x-ms-file-permission-key",
    type: {
      name: "String"
    }
  }
};
export const fileRangeWrite: coreHttp.OperationParameter = {
  parameterPath: "fileRangeWrite",
  mapper: {
    required: true,
    serializedName: "x-ms-write",
    defaultValue: 'update',
    type: {
      name: "Enum",
      allowedValues: [
        "update",
        "clear"
      ]
    }
  }
};
export const fileRangeWriteFromUrl: coreHttp.OperationParameter = {
  parameterPath: "fileRangeWriteFromUrl",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "x-ms-write",
    defaultValue: 'update',
    type: {
      name: "String"
    }
  }
};
export const fileTypeConstant: coreHttp.OperationParameter = {
  parameterPath: "fileTypeConstant",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "x-ms-type",
    defaultValue: 'file',
    type: {
      name: "String"
    }
  }
};
export const handleId: coreHttp.OperationParameter = {
  parameterPath: "handleId",
  mapper: {
    required: true,
    serializedName: "x-ms-handle-id",
    type: {
      name: "String"
    }
  }
};
export const include: coreHttp.OperationQueryParameter = {
  parameterPath: [
    "options",
    "include"
  ],
  mapper: {
    serializedName: "include",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Enum",
          allowedValues: [
            "snapshots",
            "metadata"
          ]
        }
      }
    }
  },
  collectionFormat: coreHttp.QueryCollectionFormat.Csv
};
export const marker: coreHttp.OperationQueryParameter = {
  parameterPath: [
    "options",
    "marker"
  ],
  mapper: {
    serializedName: "marker",
    type: {
      name: "String"
    }
  }
};
export const maxresults: coreHttp.OperationQueryParameter = {
  parameterPath: [
    "options",
    "maxresults"
  ],
  mapper: {
    serializedName: "maxresults",
    constraints: {
      InclusiveMinimum: 1
    },
    type: {
      name: "Number"
    }
  }
};
export const metadata: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "metadata"
  ],
  mapper: {
    serializedName: "x-ms-meta",
    type: {
      name: "Dictionary",
      value: {
        type: {
          name: "String"
        }
      }
    },
    headerCollectionPrefix: "x-ms-meta-"
  }
};
export const prefix: coreHttp.OperationQueryParameter = {
  parameterPath: [
    "options",
    "prefix"
  ],
  mapper: {
    serializedName: "prefix",
    type: {
      name: "String"
    }
  }
};
export const quota: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "quota"
  ],
  mapper: {
    serializedName: "x-ms-share-quota",
    constraints: {
      InclusiveMinimum: 1
    },
    type: {
      name: "Number"
    }
  }
};
export const range0: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "range"
  ],
  mapper: {
    serializedName: "x-ms-range",
    type: {
      name: "String"
    }
  }
};
export const range1: coreHttp.OperationParameter = {
  parameterPath: "range",
  mapper: {
    required: true,
    serializedName: "x-ms-range",
    type: {
      name: "String"
    }
  }
};
export const rangeGetContentMD5: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "rangeGetContentMD5"
  ],
  mapper: {
    serializedName: "x-ms-range-get-content-md5",
    type: {
      name: "Boolean"
    }
  }
};
export const recursive: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "recursive"
  ],
  mapper: {
    serializedName: "x-ms-recursive",
    type: {
      name: "Boolean"
    }
  }
};
export const restype0: coreHttp.OperationQueryParameter = {
  parameterPath: "restype",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "restype",
    defaultValue: 'service',
    type: {
      name: "String"
    }
  }
};
export const restype1: coreHttp.OperationQueryParameter = {
  parameterPath: "restype",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "restype",
    defaultValue: 'share',
    type: {
      name: "String"
    }
  }
};
export const restype2: coreHttp.OperationQueryParameter = {
  parameterPath: "restype",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "restype",
    defaultValue: 'directory',
    type: {
      name: "String"
    }
  }
};
export const sharesnapshot: coreHttp.OperationQueryParameter = {
  parameterPath: [
    "options",
    "sharesnapshot"
  ],
  mapper: {
    serializedName: "sharesnapshot",
    type: {
      name: "String"
    }
  }
};
export const sourceContentCrc64: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "sourceContentCrc64"
  ],
  mapper: {
    serializedName: "x-ms-source-content-crc64",
    type: {
      name: "ByteArray"
    }
  }
};
export const sourceIfMatchCrc64: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "sourceModifiedAccessConditions",
    "sourceIfMatchCrc64"
  ],
  mapper: {
    serializedName: "x-ms-source-if-match-crc64",
    type: {
      name: "ByteArray"
    }
  }
};
export const sourceIfNoneMatchCrc64: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "sourceModifiedAccessConditions",
    "sourceIfNoneMatchCrc64"
  ],
  mapper: {
    serializedName: "x-ms-source-if-none-match-crc64",
    type: {
      name: "ByteArray"
    }
  }
};
export const sourceRange: coreHttp.OperationParameter = {
  parameterPath: "sourceRange",
  mapper: {
    required: true,
    serializedName: "x-ms-source-range",
    type: {
      name: "String"
    }
  }
};
export const timeout: coreHttp.OperationQueryParameter = {
  parameterPath: [
    "options",
    "timeout"
  ],
  mapper: {
    serializedName: "timeout",
    constraints: {
      InclusiveMinimum: 0
    },
    type: {
      name: "Number"
    }
  }
};
export const url: coreHttp.OperationURLParameter = {
  parameterPath: "url",
  mapper: {
    required: true,
    serializedName: "url",
    defaultValue: '',
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const version: coreHttp.OperationParameter = {
  parameterPath: "version",
  mapper: {
    required: true,
    serializedName: "x-ms-version",
    type: {
      name: "String"
    }
  }
};