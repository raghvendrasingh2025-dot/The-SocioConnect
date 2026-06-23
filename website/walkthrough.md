import json

transcript_path = r"C:\Users\Admin\.gemini\antigravity\brain\3f592e32-f273-4328-bb1a-a9e3f120b729\.system_generated\logs\transcript.jsonl"

with open(transcript_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
            step = data.get('step_index')
            if step is not None and 1814 <= step <= 1885:
                print(f"Step {step} ({data.get('source')} - {data.get('type')}):")
                print(str(data.get('content'))[:1000])
                if 'tool_calls' in data:
                    print(f"Tools: {data['tool_calls']}")
                print("-" * 50)
        except Exception as e:
            pass
