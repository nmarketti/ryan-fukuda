# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

activate :directory_indexes

# General
configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :directory_indexes
end


# DatoCMS
activate :dato, live_reload: true


# Live Reload
configure :development do
 activate :livereload
end

# S3
activate :s3_sync do |s3_sync|
  s3_sync.bucket                = 'staging.ryanfukuda.com'
  s3_sync.region                = 'us-east-1'
end

# FAQ Layout Header
page "/faq.html", :layout => "faq"
