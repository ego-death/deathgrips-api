document.querySelector('button').addEventListener('click', runAPI);

async function runAPI(){
    document.querySelector('#rating').innerText = 'Rating: ';
    document.querySelector('#best').innerText = 'Best Track: ';
    document.querySelector('#worst').innerText = 'Worst Track: ';
    const album = document.querySelector('input').value;
    const res = await fetch(`http://localhost:8000/api/grips/${album}`);
    const data = await res.json();
    console.log(data);
    document.querySelector('#rating').innerText += ' ' + data.rating;
    document.querySelector('#best').innerText += ' ' + data.bestTrack;
    document.querySelector('#worst').innerText += ' ' + data.worstTrack;
    console.log('Done');
}