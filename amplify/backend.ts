import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { storage } from './storage/resource';
import * as s3 from 'aws-cdk-lib/aws-s3';

const backend = defineBackend({
  auth,
  data,
  storage
});

// ✅ ENFORCE BLOCK PUBLIC ACCESS ON ALL S3 BUCKETS
backend.stack.node.findAll().forEach((node) => {
  if (node instanceof s3.CfnBucket) {
    node.publicAccessBlockConfiguration = {
      blockPublicAcls: true,
      blockPublicPolicy: true,
      ignorePublicAcls: true,
      restrictPublicBuckets: true
    };
  }
});

export default backend;
