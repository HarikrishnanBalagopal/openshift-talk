const select = s => document.querySelector(s);

const show = (msg) => { select('#output-text').textContent = msg; }

const handleCalculate = async () => {
    try {
        const n = parseInt(select('#input-num').value);
        const res = await fetch(
            '/api/fib',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ n })
            }
        );
        if (!res.ok) {
            let err = `failed to call the api. status: ${res.statusText}`;
            if (res.headers.get('Content-Type').includes('application/json')) err += ' error:' + (await res.json()).error;
            return show(err);
        }
        const { ans } = await res.json();
        return show(`the ${n}th fibonnacci number is ${ans}`);
    } catch (e) {
        return show(`failed. error: ${e}`);
    }
}

function main() {
    select('#button-calc').addEventListener('click', handleCalculate);
    select('#input-num').addEventListener('keyup', e => e.key === 'Enter' && handleCalculate());
}

main();