
export async function getStaticProps() {
    await fetch('https://drive.google.com/file/d/1Jw1fP-WhL3iYIfVD4MGoVrGMiY54rMaT/view?usp=sharing')
        .then((response) => response.json())
        .then((json) => console.log(json))
}

