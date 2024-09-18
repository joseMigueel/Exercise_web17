const input1 = [
    'Downloads',
    'Videos',
    'capture',
    'mp4',
    ]

    // create your function here

    const unirRuta = (barra) => {
        const ultimoElemento = barra.pop();
        const ruta = barra.join('/');
        return `${ruta}.${ultimoElemento}`;
    }

    console.log(unirRuta(input1)) // 'Downloads/Videos/capture.mp4'
    const input2 = [
    'CodinGame',
    'python',
    'py',
    ];

    console.log(unirRuta(input2));
     // 'CodinGame/python.py'
    const input3 = [
    'programming',
    'languages',
    'easy',
    'beginner',
    'useful',
    'pythonstuff',
    'py',
    ]

    console.log(unirRuta(input3));
    // 'programming/languages/easy/beginner/useful/pythonstuff.py'
    