#!/data/data/com.termux/files/usr/bin/bash

if [ -z "$1" ]; then
  echo "Uso: ms \"sua mensagem aqui\""
  exit 1
fi

MENSAGEM="$1"

curl -s -X POST \
  -H "Content-Type: application/json" \
  -d "{\"mensagem\": \"$MENSAGEM\"}" \
  http://localhost:3000/ms

echo "📨 Mensagem enviada: $MENSAGEM"
