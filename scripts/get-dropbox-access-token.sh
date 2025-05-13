#!/bin/sh

echo "Running get-dropbox-access-token.sh script..."

# Check if sed is installed
if [ -z $(command -v sed) ]; then
  echo "Error: sed is not installed. Please install sed to proceed."
  exit 1
fi

# Check for necessary environment variables
if [ -z "$DROPBOX_REFRESH_TOKEN" ] || [ -z "$DROPBOX_CLIENT_ID" ] || [ -z "$DROPBOX_CLIENT_SECRET" ]; then
  echo "Error: Necessary environment variables are not set."
  exit 1
fi

response=$(curl -s -X POST https://api.dropbox.com/oauth2/token \
  -d grant_type=refresh_token \
  -d refresh_token=$DROPBOX_REFRESH_TOKEN \
  -u "$DROPBOX_CLIENT_ID:$DROPBOX_CLIENT_SECRET")

DROPBOX_ACCESS_TOKEN=$(echo "$response" | sed -E 's/.*"access_token": ?"([^"]+)".*/\1/')

if [ $? -ne 0 ] || [ -z "$DROPBOX_ACCESS_TOKEN" ]; then
  echo "Error: Failed to set DROPBOX_ACCESS_TOKEN."
  exit 1
fi

export DROPBOX_ACCESS_TOKEN
echo "Successfully retrieved DROPBOX_ACCESS_TOKEN."
