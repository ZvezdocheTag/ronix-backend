module.exports = ({ env }) => ({
  upload: {
    provider: "aws-s3",
    providerOptions: {
      accessKeyId: env("AWS_ACCESS_KEY_ID", "AKIA5HJEHFTSZZOV2O7B"),
      secretAccessKey: env(
        "AWS_ACCESS_SECRET",
        "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"
      ),
      region: "eu-central-1",
      params: {
        Bucket: "ronix-webapp",
      },
    },
  },
});
