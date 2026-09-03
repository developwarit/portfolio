import os

configs = {
    'html-css-masterful': {'videoId': 'EsIk1NO24s0', 'start': 61, 'end': 14580, 'duration': '4:03:00'},
    'javascript-mastery': {'videoId': 'sNicJct3dcI', 'start': 38, 'end': 13513, 'duration': '3:45:13'},
    'nextjs-ai-2026': {'videoId': 'XaEPnpAyzAY', 'start': 6, 'end': 2694, 'duration': '44:54'},
    'nodejs-modern-web': {'videoId': 'VF_veXAZNw4', 'start': 6, 'end': 7012, 'duration': '1:56:52'},
}

for course_dir, cfg in configs.items():
    p = os.path.join('app', 'courses', course_dir, 'page.tsx')
    with open(p, 'r', encoding='utf-8') as f:
        c = f.read()
    if '/videos/' not in c:
        print(f'{course_dir}: already YouTube, skipping')
        continue
    print(f'{course_dir}: updating...')
    print(f'  Lines: {len(c.split(chr(10)))}')