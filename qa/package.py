from pathlib import Path
import re,base64,mimetypes,zipfile
root=Path('/data/pat/flagg-electric-impeccable')
def uri(name):
 p=root/name
 return 'data:'+ (mimetypes.guess_type(p.name)[0] or 'application/octet-stream')+';base64,'+base64.b64encode(p.read_bytes()).decode()
css=(root/'styles.css').read_text()
css=re.sub(r"url\(['\"]?(assets/[^)'\"]+)['\"]?\)",lambda m:'url('+uri(m[1])+')',css)
h=(root/'index.html').read_text().replace('<link rel="stylesheet" href="styles.css">','<style>'+css+'</style>').replace('<script src="script.js"></script>','<script>'+(root/'script.js').read_text()+'</script>')
h=re.sub(r'src="(assets/[^\"]+)"',lambda m:'src="'+uri(m[1])+'"',h)
(root/'Flagg-Electric.html').write_text(h)
Path('/data/pat/Flagg-Electric.html').write_text(h)
with zipfile.ZipFile('/data/pat/Flagg-Electric-Website.zip','w',zipfile.ZIP_DEFLATED) as z:
 for p in root.rglob('*'):
  if p.is_file() and '.impeccable' not in p.parts:
   z.write(p,Path('Flagg-Electric-Website')/p.relative_to(root))
print('Standalone bytes:',len(h.encode()))
print('ZIP bytes:',Path('/data/pat/Flagg-Electric-Website.zip').stat().st_size)
