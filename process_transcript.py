#!/usr/bin/env python3
"""Process YouTube transcript JSON and format for markdown."""

import json
import sys

def seconds_to_timestamp(seconds):
    """Convert seconds to MM:SS or HH:MM:SS format."""
    hours = int(seconds // 3600)
    minutes = int((seconds % 3600) // 60)
    secs = int(seconds % 60)

    if hours > 0:
        return f"{hours}:{minutes:02d}:{secs:02d}"
    else:
        return f"{minutes}:{secs:02d}"

def format_transcript_paragraph(segments, video_id):
    """Group segments into paragraphs and format with timestamps."""
    paragraphs = []
    current_para = []
    current_start = None

    for i, seg in enumerate(segments):
        if current_start is None:
            current_start = seg['start']

        current_para.append(seg['text'])

        # Group 4-6 segments per paragraph (roughly 20-30 seconds)
        if len(current_para) >= 5 or i == len(segments) - 1:
            # Format paragraph
            timestamp = seconds_to_timestamp(current_start)
            seconds = int(current_start)
            text = ' '.join(current_para)
            para = f"[{timestamp}](https://www.youtube.com/watch?v={video_id}&t={seconds}s) {text}"
            paragraphs.append(para)

            # Reset for next paragraph
            current_para = []
            current_start = None

    return paragraphs

def main():
    if len(sys.argv) < 2:
        print("Usage: python3 process_transcript.py <transcript.json>")
        sys.exit(1)

    input_file = sys.argv[1]

    # Read JSON
    with open(input_file, 'r') as f:
        data = json.load(f)

    segments = data['data']['segments']
    print(f"Total segments: {len(segments)}")

    # Print first 50 segments for inspection
    print("\n--- First 50 segments ---")
    for i, seg in enumerate(segments[:50]):
        ts = seconds_to_timestamp(seg['start'])
        print(f"[{ts}] {seg['text']}")

    # Sample paragraphs from beginning, middle, end
    video_id = "EV7WhVT270Q"

    print("\n--- Sample paragraphs (first 10) ---")
    sample_paras = format_transcript_paragraph(segments[:50], video_id)
    for para in sample_paras[:10]:
        print(para)
        print()

if __name__ == "__main__":
    main()
