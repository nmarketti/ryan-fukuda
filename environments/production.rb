# S3 Production
activate :s3_sync do |s3_sync|
  s3_sync.bucket                = 'ryanfukuda.com'
  s3_sync.region                = 'us-east-1'
end