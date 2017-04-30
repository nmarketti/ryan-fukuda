# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

activate :directory_indexes

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# Optimization
  activate :minify_html do |html|
    html.remove_quotes = false
    html.remove_intertag_spaces = true
  end

configure :build do
  activate :gzip
end

# DatoCMS
activate :dato, live_reload: true


# Live Reload
configure :development do
 activate :livereload
end

# S3 Staging
configure :staging do
    activate :s3_sync do |s3_sync|
      s3_sync.bucket                = 'staging.ryanfukuda.com'
      s3_sync.region                = 'us-east-1'
  end
end

configure :production do
    activate :s3_sync do |s3_sync|
      s3_sync.bucket                = 'ryanfukuda.com'
      s3_sync.region                = 'us-east-1'
      default_caching_policy max_age: (60 * 60 * 24 * 365)
      caching_policy 'text/html', public: true, max_age: 0, must_revalidate: true
end
end

# FAQ Layout Header
page "/faq.html", :layout => "faq"
