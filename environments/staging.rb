# S3 Staging
activate :s3_sync do |s3_sync_production|
  s3_sync.bucket                = 'ryanfukuda.com'
  s3_sync.region                = 'us-east-1'
end