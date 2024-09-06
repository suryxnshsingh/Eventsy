export default function Page404() {
    return (
        <div style={{ textAlign: 'center', paddingTop: '12rem' }}>
            <h1>Error <a className='eventsyLandingH'>404</a></h1>
            <p style={{ fontSize: '1.5rem' , color : '#fff'}}>The page you are looking for does not exist.</p>
            <button className="button404" onClick={() => window.history.back()}><a className='landButton'>Back</a></button>
        </div>
    );
}