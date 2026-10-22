import { Song, Setlist } from '../types/song';

export const SAMPLE_SONGS: Song[] = [
  {
    id: 'song-1792403012459',
    title: 'ข้าจะรักและบูชา',
    artist: '',
    key: 'G',
    originalKey: 'G',
    tempo: 120,
    timeSignature: '4/4',
    capo: 0,
    duration: 180,
    tags: ['worship'],
    notes: '',
    chordProContent: `
{c: Verse 1}
         G           C        G  
1. อยากจะพบพระองค์  ผู้ทรงดำรงในกาลเวลา
       Em           D       C  
อยากจะเห็นพระพักตร์  ผู้เป็นที่รักของข้า
   Am D   Bm   Em     C        D  
ข้าปราถนาได้อยู่ไกล้ชิด  ได้พินิจในความงาม

{c: Verse 2}
         G          C            G  
2. อยากจะนั่งลงใกล้  ที่เบื้องพระบาทองค์พระเยซู
     Em            D       C 
อยู่ตรงหน้าพระพักตร์  ผู้เป็นที่รักของข้า
     Am  D   Bm   Em  
เพียงหนึ่งวันนี้ ได้อยู่ไกล้ชิด
   Am    C      D  
ก็ดีกว่า พันวันในที่ใด ๆ

{c: Chorus}
        C         Bm   Em  
*** ข้าจะรักและบูชา นมัส...การ
    Am      D        G  
จะไม่ขอไปไกลห่างจากพระพักตร์
    C         Bm   Em  
ข้าจะรักและบูชา นมัส...การ
     Am    D     G  
อยู่ตรงนี้ที่พระบาทพระองค์`,
    lastModified: 1792403012459
  },
  {
    id: 'song-1792402553673',
    title: 'ขอพระวิญญาณสถิต',
    artist: '',
    key: 'G',
    originalKey: 'G',
    tempo: 120,
    timeSignature: '4/4',
    capo: 0,
    duration: 180,
    tags: ['worship'],
    notes: '',
    chordProContent: `
{c: Verse 1}
G      D        Am7      D     G
พระวิญญาณ  เมื่อเราร้องเชิญพระองค์มาสถิต 
     D     Am7     D
นําเราชิด ใกล้หัวใจของพระบิดา 
Am7         Bm7           C 
และนี่เป็นเสียงเพลงคร่ําครวญของเรา 
Am7     Bm7           D 
เราไม่ต้องการจะเป็นเหมือนเดิม 

{c: Chorus} 
    G    D    Em7 C       D     G
*** ขอ...พระวิญญาณสถิต สัมผัสชีวิตของเรา 
G    D        Em7          C     D 
ขอ...องค์พระเยซูคริสต์ โปรดเจิมชีวิตของเรา 
Am7     G        C     D 
ให้เราได้ก้าวไป จากพระสิริสู่พระสิริ 
Am7    G      C           D 
ให้เรามีชีวิตใหม่ มีหัวใจอย่างพระองค์
`,
    lastModified: 1792403412544
  },
  {
    id: 'song-1792402119655',
    title: 'เรานมัสการ',
    artist: '',
    key: 'G',
    originalKey: 'G',
    tempo: 80,
    timeSignature: '4/4',
    capo: 0,
    duration: 180,
    tags: ['worship'],
    notes: '',
    chordProContent: `
{c: Verse 1}
G    D       Em    D         C   Bm    Am       D  
เรา...พึ่งพาพระองค์   พระองค์ทรงเป็นทุกสิ่ง   ที่ใจเราต้องการ
G      D      Em    D        C   Bm  
เรา...เชื่อในพระองค์   พระองค์บนดาลทุกสิ่ง
  Am        D   G  D7  
ที่เกินความเข้าใจของเรา

{c: Chorus}
        G  D    Em           D  
*** เรานมัสการ   องค์พระเจ้ายื่งใหญ่
  C     Bm          Am     D7  
ไม่มีอะไรที่ยากเกินกว่าพระองค์จะทำ
     G D    Em           D  
เรานมัสการ   องค์พระเจ้ายิ่งใหญ่
     Am   D          G  
และไม่มีใครเทียบได้กับพระองค์
`,
    lastModified: 1792403506554
  },
  {
    id: 'song-1792401221887',
    title: 'โอ ข้ายกพระนามสูงสุด',
    artist: '',
    key: 'G',
    originalKey: 'G',
    tempo: 120,
    timeSignature: '4/4',
    capo: 0,
    duration: 180,
    tags: ['worship'],
    notes: '',
    chordProContent: `
{c: Verse 1}
G       C          D C D G
1. โอ ข้ายกพระนามสูงสุด   
G    C           D     C D G
โอ ข้ารักจึงร้องเพลงสรรเสริญ   
G    C         D  C D G
พระเยซูทรงอยู่ภายใน   
G   C          D    C D G
ข้ายินดีพระองค์ช่วยให้รอด   

{c: Chorus}
G         C      D      C  D    G  
*** ลงจากสวรรค์สู่โลกา  สำแดง   หนทาง
     C       D    C  D     G  
จากโลกา สู่กางเขน ชำระ  ความบาป
       C    D       Bm    Em  
จากกางเขนสู่อุโมงค์ จากอุโมงค์สู่สวรรค์
     C     D   G  
โอ ข้ายกพระนามสูงสุด
`,
    lastModified: 1792406778146
  }
];

export const INITIAL_SETLISTS: Setlist[] = [];