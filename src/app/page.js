import "./home.modules.scss";

export default function HomePage() {
  function fizzBuz(n) {
    let a = new Array(n);

    for (let i = 1; i < n + 1; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        a[i - 1] = `fizzBuzz`;
      } else if (i % 3 === 0) {
        a[i - 1] = `fizz`;
      } else if (i % 5 === 0) {
        a[i - 1] = `buzz`;
      } else {
        a[i - 1] = `${i}`;
      }
    }

    return a;
  }

  console.log(fizzBuz(15));

  return (
    <>
      <div className="light" id="bodyC">
        <h1>Hello World</h1>
        <div className="main">
          <p className="main__paragraph">
            lorem
            jsddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddh
            sjhasfhosfhsiafh saijsijosafjosifjoasjosafjosajfjsaoijfoiasjf
          </p>
          <p className="main__paragraph">
            lorem
            jsddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddh
            sjhasfhosfhsiafh saijsijosafjosifjoasjosafjosajfjsaoijfoiasjf
          </p>
        </div>
      </div>
    </>
  );
}
