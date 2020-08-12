API="http://localhost:4741"
URL_PATH="/games"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "game": {
      "title": "'"${TITLE}"'",
      "message": "'"${MESSAGE}"'",
      "location": "'"${LOCATION}"'",
      "gamertag": "'"${GAMERTAG}"'",
      "status": "'"${STATUS}"'"
    }
  }'

echo
