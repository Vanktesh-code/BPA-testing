# Amplify Gen 2 with Block Public Access (BPA)

This project demonstrates BPA enforcement for Control Tower CT.S3.PR.1 compliance.

## Setup

# Install dependencies
cd amplify
npm install
cd ..

# Start sandbox
npm run dev

# Deploy to production
npm run deploy

## Verification

# Check BPA on deployed bucket
aws s3api get-public-access-block --bucket amplify-<bucket-name>
