for img in *.jpg; do
  ffmpeg -i "$img" -vf scale=20:-1 "${img%.jpg}-small.jpg"
done
