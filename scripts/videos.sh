for file in ./assets/videos/*; do 
    if [ -f "$file" ]; then 
        echo "$file"
        fileName=$(basename "$file" | cut -d. -f1)
        ffmpeg -y -i $file -vf "scale=512:512:force_original_aspect_ratio=increase,crop=512:512" -an "public/assets/videos/$fileName.mp4"
        ffmpeg -y -i $file -vf "scale=512:512:force_original_aspect_ratio=increase,crop=512:512" -c:v libvpx-vp9 -crf 40 -an "public/assets/videos/$fileName.webm"
        ffmpeg -y -i $file -vf "scale=512:512:force_original_aspect_ratio=increase,crop=512:512" -frames:v 1 "public/assets/images/covers/$fileName-thumb.jpg"

        ffmpeg -y -i $file -vf "scale=1024:512:force_original_aspect_ratio=increase,crop=1024:512" -an "public/assets/videos/$fileName-wide.mp4"
        ffmpeg -y -i $file -vf "scale=1024:512:force_original_aspect_ratio=increase,crop=1024:512" -c:v libvpx-vp9 -crf 40 -an "public/assets/videos/$fileName-wide.webm"
        ffmpeg -y -i $file -vf "scale=1024:512:force_original_aspect_ratio=increase,crop=1024:512" -frames:v 1 "public/assets/images/covers/$fileName-wide.jpg"

        ffmpeg -y -i $file -vf "scale=512:1024:force_original_aspect_ratio=increase,crop=512:1024" -an "public/assets/videos/$fileName-tall.mp4"
        ffmpeg -y -i $file -vf "scale=512:1024:force_original_aspect_ratio=increase,crop=512:1024" -c:v libvpx-vp9 -crf 40 -an "public/assets/videos/$fileName-tall.webm"
        ffmpeg -y -i $file -vf "scale=512:1024:force_original_aspect_ratio=increase,crop=512:1024" -frames:v 1 "public/assets/images/covers/$fileName-tall.jpg"
    fi 
done
