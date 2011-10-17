set :application, "html5"
set :repository,  "git@github.com:lsaffie/html5.git"

set :scm, :git
set :user, :deploy
set :use_sudo, false

set :deploy_to, "/home/#{user}/#{application}"
set :deploy_via, :remote_cache

role :web, "www.saffie.ca"
