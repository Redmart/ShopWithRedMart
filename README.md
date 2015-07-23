# RedMart Web Client

> Online grocery shopping

## Building the App

1. Install [Node.js & NPM](http://blog.nodejs.org/2014/01/23/node-v0-10-25-stable/) (version 0-10-25)
1. Install [Grunt.js](https://github.com/gruntjs/grunt/wiki/Getting-started)
1. Install [PhantomJS](http://phantomjs.org/) and [CasperJS](http://casperjs.org/) (at least version 1.1)
1. Run `npm install` to fetch all dependencies.
1. Run `npm test` to check the code.
1. Run `grunt` to build a production version of the app.
1. *(Optional)* Run `grunt dev` to enable file change monitoring and automatic rebuilding.

## Local Deployment

For local develpoment, add the following entries to your `hosts` file.

	# Lin: /etc/hosts
	# Mac: /etc/hosts
	# Win: %SYSTEMROOT%\system32\drivers\etc\hosts

	127.0.0.1   redmart.localhost
	127.0.0.1   dev.redmart.localhost

## Webserver Configuration

The built app serves out of the `./publish` directory. For debugging purposes, a non-optimised build can be served from the `./source` root directory. The `./intermediate` directory is used only during the build process and should not be accessed from a browser.

To provide client-side URL routing, the webserver serves `index.html`, a minimal app loader, for any missing file.

Assets such as images and fonts are revisioned by renaming them based on a file content hash. Cache expiration in production should be set to forever. In the development build asset revving is not applied, so caching is disabled to make testing easier.

##### Nginx

	# Development environment
	server {
		listen 80;
		server_name dev.redmart.localhost;
		root /var/www/redmart.com/Golden-Grocer/www/source;
		index index.html;
		# Relay all API calls to avoid CORS restriction
		location /api {
			rewrite ^/api/(.*) /$1 break;
			proxy_pass http://gg.api.redmart.com;
		}
		# Disable caching in development
		add_header Cache-Control 'no-cache';
		location / {
			# Forward missing files to the client-side router
			try_files $uri $uri/ /index.html;
		}
	}

	# Production environment
	server {
		listen 80;
		server_name redmart.localhost;
		root /var/www/redmart.com/www/publish;
		index index.html;
		# Relay all API calls to avoid CORS restriction
		location /api {
			rewrite ^/api/(.*) /$1 break;
			proxy_pass http://gg.api.redmart.com;
		}
		# Revved assets can be cached forever
		location ~ ^/(styles|fonts|img|js)/ { expires max; }
		location / {
			# Forward missing files to the client-side router
			try_files $uri $uri/ /index.html;
			# Browser should not check for updates within a minute
			add_header Cache-Control 'max-age=60, must-revalidate';
		}
	}

##### Apache2

	NameVirtualHost *

	# Development environment
	<VirtualHost *:80>
	DocumentRoot /var/www/redmart.com/www/source
	ServerName dev.redmart.localhost
	RewriteEngine On
	RewriteCond %{REQUEST_URI} !^\/(styles|fonts|img|js|templates|(.+\.))(.*)
	RewriteRule ^\/(.*)$ \/index.html [L]
	RewriteLog "/var/log/apache2/rewrite_log"
	RewriteLogLevel 3
	ExpiresDefault A0
	Header set Cache-Control "no-cache, no-store, must-revalidate, max-age=0, proxy-revalidate"
	Header set Pragma "no-cache"
	</VirtualHost>

	# Production environment
	<VirtualHost *:80>
	DocumentRoot /var/www/redmart.com/www/publish
	ServerName redmart.localhost
	RewriteEngine On
	RewriteCond %{REQUEST_URI} !^\/(styles|fonts|img|js|(.+\.))(.*)
	RewriteRule ^\/(.*)$ \/index.html [L]
	<FilesMatch "^\/(styles|fonts|img|js)\/">
	Header set Cache-Control "max-age=31556926"
	</FilesMatch>
	</VirtualHost>

## Development Guidelines

- Use [EditorConfig](http://editorconfig.org/) if supported by your favourite code editor.
- Sublime Text [project settings](http://www.sublimetext.com/docs/2/projects.html) are included.
- Run `npm test` to sanity check the code.
- Open <http://redmart.localhost/> (production) or <http://dev.redmart.localhost/> (development)
- Run `grunt dev` while developing. This will automatically recompile styles and jshint your js code upon file changes.

## Dependencies

Learn these tools:

- [Backbone.js](http://backbonejs.org/)
- [LayoutManager](http://www.layoutmanager.org/)
- [Grunt](http://www.gruntjs.com/)
- [Handlebars](http://handlebarsjs.com/)
- [jQuery](http://jquery.com/)
- [npm](https://npmjs.org/)
- [RequireJS](http://requirejs.org/)
- [Underscore](http://underscorejs.org/)
# ShopWithRedMart
