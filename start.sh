#!/bin/bash
set -e

echo "Checking and installing dependencies for Rails..."
# Navigate to the Rails app directory if not already in it
# cd /path/to/rails/app
bundle check || bundle install

echo "Checking and installing dependencies for React..."
# Navigate to the React app directory
cd client/
yarn check || yarn install

echo "Building React app..."
yarn build

# Remove old static files
echo "Cleaning up old static assets..."
rm -rf ../public/static/*


# Move new build files
echo "Moving new build files..."
mv -f build/* ../public/

# Navigate back to the root directory
cd ..

# Start the Rails server
echo "Starting Rails server..."
bundle exec rails s
