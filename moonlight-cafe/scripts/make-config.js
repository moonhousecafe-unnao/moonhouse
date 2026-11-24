// Usage: node scripts/make-config.js   (reads .env, writes public/firebase-config.js)
const fs=require('fs'),path=require('path');
const root=path.join(__dirname,'..'),env={};
for(const l of fs.readFileSync(path.join(root,'.env'),'utf8').split(/\r?\n/)){const m=l.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);if(m&&!l.trim().startsWith('#'))env[m[1]]=m[2]}
const map={apiKey:'FIREBASE_API_KEY',authDomain:'FIREBASE_AUTH_DOMAIN',projectId:'FIREBASE_PROJECT_ID',storageBucket:'FIREBASE_STORAGE_BUCKET',messagingSenderId:'FIREBASE_MESSAGING_SENDER_ID',appId:'FIREBASE_APP_ID',measurementId:'FIREBASE_MEASUREMENT_ID'};
const cfg={};for(const [k,v] of Object.entries(map)){if(!env[v]){console.error('Missing '+v+' in .env');process.exit(1)}cfg[k]=env[v]}
fs.writeFileSync(path.join(root,'public','firebase-config.js'),'export const firebaseConfig='+JSON.stringify(cfg,null,2)+';\n');
console.log('Wrote public/firebase-config.js');
