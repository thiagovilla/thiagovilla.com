curl https://api.dropbox.com/oauth2/token \
  -d grant_type=refresh_token \
  -d refresh_token=$DROPBOX_REFRESH_TOKEN \
  -d client_id=$DROPBOX_CLIENT_ID \
  -d client_secret=$DROPBOX_CLIENT_SECRET \
  | jq -r ".access_token"
