let komentarPerPage = 5;//jumlah komentar perhalaman
    
    let page_active = 1;//halaman active awal
    
    let profileAnonymous = "https://i.kym-cdn.com/photos/images/original/000/628/173/006.gif"//profile Anonymous
    
    const kalimatKotor = [
   "kalimatKotor1", "kalimatKotor2", "kalimatKotor3"
    ]; // Tambahkan kata-kata kotor di sini

var tagKomentar = ['A', 'P', 'CODE', 'IMG', 'VIDEO', 'IFRAME', 'B', 'BLOCKQUOTE', 'SOURCE'];
var dataClassTagkomentar = {
    'A': ['a_codehiru', 'mentionKoment'],
    'P': ['p_codehiru'],
    'CODE': ['code_codehiru'],
    'IMG': ['img_codehiru'],
    'VIDEO': ['video_codehiru'],
    'IFRAME': ['iframe_codehiru'],
    'B': ['b_codehiru'],
    'BLOCKQUOTE': ['blockquote_codehiru'],
    'SOURCE': ['source_codehiru']
};
