const express = require('express')
const bodyParser = require('body-parser');
const http = require('http')
const app = express()

const hostname = '127.0.0.1';
const PORT = process.env.PORT || 5000

// ***************************************************************

let calenpartidos = [
    {
        tipo: '1',
        dia: '10/05/2018',
        
    },
    {
        tipo: '0',
        img_local: 'http://static.logomaker.com.s3-us-west-2.amazonaws.com/wp-content/uploads/2015/06/Atlanta-Hawks-PacMan-Logo.png',
        local: 'Atlanta Hawks',
        img_visitante: 'http://ticketcrusader.com/wp-content/uploads/2015/09/Celtics.jpg',
        visitante: 'Boston Celtics',
        hora: '22:00'
    },
     {
        tipo: '1',
        dia: '12/05/2018',
        
    },
    {
        tipo: '0',
        img_local: 'http://a1.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnba%2F500%2Fbkn.png',
        local: 'Brooklyn Nets',
        img_visitante: 'http://a1.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnba%2F500%2Fcha.png',
        visitante: 'Charlotte Hornets',
        hora: '21:00'
    },
     {
        tipo: '1',
        dia: '20/05/2018',
        
    },
    {
        tipo: '0',
        img_local: 'http://ticketcrusader.com/wp-content/uploads/2015/09/Chicago-Bulls.jpg',
        local: 'Chicago Bulls',
        img_visitante: 'http://www.logo-designer.co/wp-content/uploads/2017/07/2017-Cleveland-Cavaliers-logo-design.png',
        visitante: 'Cleveland Cavaliers',
        hora: '22:00'
    },
    {
        tipo: '1',
        dia: '26/05/2018',
        
    },
    {
        tipo: '0',
        img_local: 'http://www.caratulasylogos.com/sites/default/files/styles/medium/public/escudos/dallas_mavericks.jpg?itok=50mQfAFA',
        local: 'Dallas Mavericks',
        img_visitante: 'http://ava7.com/w/basketball-teams/denver-nuggets/denver-nuggets-nba-basketball-team.jpg',
        visitante: 'Denver Nuggets',
        hora: '23:00'
    },
     {
        tipo: '1',
        dia: '07/06/2018',
        
    },
    {
        tipo: '0',
        img_local: 'http://www.logo-designer.co/wp-content/uploads/2017/05/2017-detroit-pistons-logo-design.png',
        local: 'Detroit Pistons',
        img_visitante: 'http://1.bp.blogspot.com/-p9rKsv3kPKM/VCgVOu5ayrI/AAAAAAAAFDc/niSaiuT940U/w1200-h630-p-k-no-nu/Logo%2BGolden%2BState%2BWarriors.png',
        visitante: 'Golden State Warriors',
        hora: '20:00'
    },
    {
        tipo: '0',
        img_local: 'http://foxsportstexarkana.com/wp-content/uploads/2018/04/houston_rockets.png',
        local: 'Houston Rockets',
        img_visitante: 'http://thecourtsidecollective.com/wp-content/uploads/2012/10/indiana-pacers.gif',
        visitante: 'Indiana Pacers',
        hora: '20:00'
    }

    
];

let tablapos = [
    {
        grupo: 'Con. Este',
        equipo1: 'Boston Celtics',
        equipo2: 'Cleveland Cavaliers',
        equipo3: 'Indiana Pacers',
        equipo4: 'Chicago Bulls',
        equipo5: 'Charlotte Hornets',
        equipo6: 'Detroit Pistons',
        equipo_img1: 'http://ticketcrusader.com/wp-content/uploads/2015/09/Celtics.jpg',
        equipo_img2: 'http://www.logo-designer.co/wp-content/uploads/2017/07/2017-Cleveland-Cavaliers-logo-design.png',
        equipo_img3: 'http://thecourtsidecollective.com/wp-content/uploads/2012/10/indiana-pacers.gif',
        equipo_img4: 'http://ticketcrusader.com/wp-content/uploads/2015/09/Chicago-Bulls.jpg',
        equipo_img5: 'http://a1.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnba%2F500%2Fcha.png',
        equipo_img6: 'http://www.logo-designer.co/wp-content/uploads/2017/05/2017-detroit-pistons-logo-design.png'
    },
    {
        grupo: 'Con. Oeste',
        equipo1: 'Houston Rockets',
        equipo2: 'Golden State Warriors',
        equipo3: 'Denver Nuggets',
        equipo4: 'Dallas Mavericks',
        equipo5: 'Brooklyn Nets',
        equipo6: 'Atlanta Hawks',
        equipo_img1: 'http://foxsportstexarkana.com/wp-content/uploads/2018/04/houston_rockets.png',
        equipo_img2: 'http://1.bp.blogspot.com/-p9rKsv3kPKM/VCgVOu5ayrI/AAAAAAAAFDc/niSaiuT940U/w1200-h630-p-k-no-nu/Logo%2BGolden%2BState%2BWarriors.png',
        equipo_img3: 'http://ava7.com/w/basketball-teams/denver-nuggets/denver-nuggets-nba-basketball-team.jpg',
        equipo_img4: 'http://www.caratulasylogos.com/sites/default/files/styles/medium/public/escudos/dallas_mavericks.jpg?itok=50mQfAFA',
        equipo_img5: 'http://a1.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnba%2F500%2Fbkn.png',
        equipo_img6: 'http://static.logomaker.com.s3-us-west-2.amazonaws.com/wp-content/uploads/2015/06/Atlanta-Hawks-PacMan-Logo.png'
    }
    
];

let estadios = [
    {
        id: '1', 
        nombre: 'Philips Arena', 
        capacidad: '18.047', 
        anio: '1999',
        ciudad: 'Atlanta',
        url: 'http://nba.cdn.turner.com/nba/big/teams/hawks/2016/11/04/1478278120976-Incredible-Time-Lapse-Shows-7-Events-In-8-Days-at-Philips-Arena-915575-8.576x324.jpg',       
        star: '3'
        
    },
    {
        id: '2', 
        nombre: 'TD Garden', 
        capacidad: '18.624', 
        anio: '1995', 
        ciudad: 'Boston',
        url: 'http://www.destination360.com/north-america/us/massachusetts/images/s/td-garden.jpg',
        star: '3'
        
    },
    {
        id: '3',
        nombre: 'Barclays Center', 
        capacidad: '17.732', 
        anio: '2012', 
        ciudad: 'Nueva York',
        url: 'http://stadiumparkingguides.com/wp-content/uploads/2014/10/barclays_center_parking.jpg',
        star: '3'
        
    },
    {
        id: '4',
        nombre: 'Spectrum Center', 
        capacidad: '19.077', 
        anio: '2005', 
        ciudad: 'Charlotte',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7cZ698LmrsmlsHx5CHkJGpJjGmAJrWtidWQHkg9DInQNhPKwgUQ',
        star: '3'
        
    },
    {
        id: '5',
        nombre: 'United Center',
        capacidad: '20.917', 
        anio: '1994', 
        ciudad: 'Chicago',
        url: 'http://www.insidearenas.com/wp-content/uploads/2016/09/united2011.jpg',
        star: '3'
        
    },
    {
        id: '6', 
        nombre: 'Quicken Loans Arena',
        capacidad: '20.562',
        anio: '1994', 
        ciudad: 'Cleveland',
        url: 'http://crg.us.com/wp-content/uploads/2015/07/cavs-flames_1_mg_7184-final.jpg',
        star: '3'
        
    },
    {
        id: '7', 
        nombre: 'American Airlines Center', 
        capacidad: '19.200', 
        anio: '2001', 
        ciudad: 'Dallas',
        url: 'http://stadiumparkingguides.com/wp-content/uploads/2014/10/american_airlines_center_parking.jpg',
        star: '3'
        
    },
    {
        id: '8', 
        nombre: 'Pepsi Center', 
        capacidad: '19.155', 
        anio: '1999', 
        ciudad: 'Denver',
        url: 'http://emmashercliff.typepad.com/photos/uncategorized/2008/04/08/p3290095.jpg',
        star: '3'
        
    },
    {
        id: '9', 
        nombre: 'Little Caesars Arena', 
        capacidad: '20.491',  
        anio: '2017', 
        ciudad: 'Detroit',
        url: 'http://lajugadafinanciera.com/wp-content/uploads/2016/11/Little-Caesars-Arena.jpg',
        star: '3'
        
    },
    {
        id: '10', 
        nombre: 'Oracle Arena',
        capacidad: '19.596',  
        anio: '1966', 
        ciudad: 'Oakland',
        url: 'http://alphamechanicalservice.com/wp-content/uploads/2014/06/SanAntonio-1.jpg',
        star: '3'
        
    },
    {
        id: '11', 
        nombre: 'Toyota Center', 
        capacidad: '18.055', 
        anio: '2003', 
        ciudad: 'Houston',
        url: 'http://1c71hb3in51z3g8k1j1nogrdvsm.wpengine.netdna-cdn.com/wp-content/uploads/2017/11/1920px-Toyota_Center_inside.jpg',
        star: '3'
        
    },
    {
        id: '12', 
        nombre: 'Bankers Life Fieldhouse', 
        capacidad: '18.165', 
        anio: '1999', 
        ciudad: 'Indiana',
        url: 'http://www.ehc-global.com/wp-content/uploads/2016/09/Americas-USA-Bankers-Life-Fieldhouse-02.jpg',
        star: '3'
        
    }
];


let equipos = [
    {
        id: '1',
        nombre: 'Atlanta Hawks',
        logo: 'http://static.logomaker.com.s3-us-west-2.amazonaws.com/wp-content/uploads/2015/06/Atlanta-Hawks-PacMan-Logo.png',
        entrenador: 'Mike Budenholzer'
    },
    {
        id: '2',
        nombre: 'Boston Celtics',
        logo: 'http://ticketcrusader.com/wp-content/uploads/2015/09/Celtics.jpg',
        entrenador: 'Brad Stevens'
    },
    {
        id: '3',
        nombre: 'Brooklyn Nets',
        logo: 'http://a1.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnba%2F500%2Fbkn.png',
        entrenador: 'Kenny Atkinson'
    },
    {
        id: '4',
        nombre: 'Charlotte Hornets',
        logo: 'http://a1.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnba%2F500%2Fcha.png',
        entrenador: 'Steve Clifford'
    },
    {
        id: '5',
        nombre: 'Chicago Bulls',
        logo: 'http://ticketcrusader.com/wp-content/uploads/2015/09/Chicago-Bulls.jpg',
        entrenador: 'Fred Hoiberg',
    },
    {
        id: '6',
        nombre: 'Cleveland Cavaliers',
        logo: 'http://www.logo-designer.co/wp-content/uploads/2017/07/2017-Cleveland-Cavaliers-logo-design.png',
        entrenador: 'Tyronn Lue'
    },
    {
        id: '7',
        nombre: 'Dallas Mavericks',
        logo: 'http://www.caratulasylogos.com/sites/default/files/styles/medium/public/escudos/dallas_mavericks.jpg?itok=50mQfAFA',
        entrenador: 'Michael Lue'
    },
    {
        id: '8',
        nombre: 'Denver Nuggets',
        logo: 'http://ava7.com/w/basketball-teams/denver-nuggets/denver-nuggets-nba-basketball-team.jpg',
        entrenador: 'Steve Curry'
    },
    {
        id: '9',
        nombre: 'Detroit Pistons',
        logo: 'http://www.logo-designer.co/wp-content/uploads/2017/05/2017-detroit-pistons-logo-design.png',
        entrenador: 'Stan Van Gundy'
    },
    {
        id: '10',
        nombre: 'Golden State Warriors',
        logo: 'http://1.bp.blogspot.com/-p9rKsv3kPKM/VCgVOu5ayrI/AAAAAAAAFDc/niSaiuT940U/w1200-h630-p-k-no-nu/Logo%2BGolden%2BState%2BWarriors.png',
        entrenador: 'Steve Kerr'
    },
    {
        id: '11',
        nombre: 'Houston Rockets',
        logo: 'http://foxsportstexarkana.com/wp-content/uploads/2018/04/houston_rockets.png',
        entrenador: 'Mike Antoni'
    },
    {
        id: '12',
        nombre: 'Indiana Pacers',
        logo: 'http://thecourtsidecollective.com/wp-content/uploads/2012/10/indiana-pacers.gif',
        entrenador: 'Nate McMillan'
    }


];

let jugadores= [
    {
        equipo: 'Atlanta Hawks',
        nombre1: 'Malcolm Delaney',
        nombre2: 'Jaylen Morris',
        nombre3: 'John Collins',
        nombre4: 'Miles Plumlee',
        nombre5: 'Josh Magette',
        juga_img1: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1627098.png',
        juga_img2: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1628537.png',
        juga_img3: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1628381.png',
        juga_img4: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203101.png',
        juga_img5: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203705.png'

    },
    {
        equipo: 'Boston Celtics',
        nombre1: 'Terry Rozier',
        nombre2: 'Abdel Nader',
        nombre3: 'Marcus Morris',
        nombre4: 'Greg Monroe',
        nombre5: 'Kadeem Allen',
        juga_img1: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1626179.png',
        juga_img2: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1627846.png',
        juga_img3: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202694.png',
        juga_img4: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202328.png',
        juga_img5: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1628443.png'

    },
    {
        equipo: 'Brooklyn Nets',
        nombre1: 'Spencer Dinwiddie',
        nombre2: 'Caris LeVert',
        nombre3: 'Joe Harris',
        nombre4: 'Dante Cunningham',
        nombre5: 'Quincy Acy',
        juga_img1: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203915.png',
        juga_img2: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1627747.png',
        juga_img3: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203925.png',
        juga_img4: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201967.png',
        juga_img5: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203112.png'

    },
      {
        equipo: 'Charlotte Hornets',
        nombre1: 'Kemba Walker',
        nombre2: 'Nicolas Batum',
        nombre3: 'Dwayne Bacon',
        nombre4: 'Marvin Williams',
        nombre5: 'Cody Zeller',
        juga_img1: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202689.png',
        juga_img2: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201587.png',
        juga_img3: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1628407.png',
        juga_img4: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/101107.png',
        juga_img5: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203469.png'

    },
     {
        equipo: 'Chicago Bulls',
        nombre1: 'Kris Dunn',
        nombre2: 'David Nwaba',
        nombre3: 'Paul Zipser',
        nombre4: 'Noah Vonleh',
        nombre5: 'Cristiano Felicio',
        juga_img1: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1627739.png',
        juga_img2: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1628021.png',
        juga_img3: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1627835.png',
        juga_img4: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203943.png',
        juga_img5: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1626245.png'

    },
    {
        equipo: 'Cleveland Cavaliers',
        nombre1: 'George Hill',
        nombre2: 'Rodney Hood',
        nombre3: 'LeBron James',
        nombre4: 'Okaro White',
        nombre5: 'Tristan Thompsoncio',
        juga_img1: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201588.png',
        juga_img2: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203918.png',
        juga_img3: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2544.png',
        juga_img4: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1627855.png',
        juga_img5: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202684.png'

    },
     {
        equipo: 'Dallas Mavericks',
        nombre1: 'Yogi Ferrell',
        nombre2: 'Seth Curry',
        nombre3: 'Harrison Barnes',
        nombre4: 'Dwight Powell',
        nombre5: 'Salah Mejri',
        juga_img1: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1627812.png',
        juga_img2: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203552.png',
        juga_img3: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203084.png',
        juga_img4: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203939.png',
        juga_img5: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1626257.png'

    },
    {
        equipo: 'Denver Nuggets',
        nombre1: 'Devin Harris',
        nombre2: 'Gary Harris',
        nombre3: 'Wilson Chandler',
        nombre4: 'Paul Millsap',
        nombre5: 'Mason Plumlee',
        juga_img1: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2734.png',
        juga_img2: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203914.png',
        juga_img3: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201163.png',
        juga_img4: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/200794.png',
        juga_img5: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203486.png'

    },
     {
        equipo: 'Detroit Pistons',
        nombre1: 'Ish Smith',
        nombre2: 'Luke Kennard',
        nombre3: 'James Ennis',
        nombre4: 'Anthony Tolliver',
        nombre5: 'Eric Moreland',
        juga_img1: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202397.png',
        juga_img2: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1628379.png',
        juga_img3: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203516.png',
        juga_img4: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201229.png',
        juga_img5: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203961.png'

    },
    {
        equipo: 'Golden State Warriors',
        nombre1: 'Stephen Curry',
        nombre2: 'Klay Thompson',
        nombre3: 'Kevin Durant',
        nombre4: 'Draymond Green',
        nombre5: 'Damian Jones',
        juga_img1: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201939.png',
        juga_img2: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202691.png',
        juga_img3: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201142.png',
        juga_img4: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203110.png',
        juga_img5: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1627745.png'

    },
    {
        equipo: 'Houston Rockets',
        nombre1: 'Eric Gordon',
        nombre2: 'James Harden',
        nombre3: 'Joe Johnson',
        nombre4: 'Ryan Anderson',
        nombre5: 'Zhou Qi',
        juga_img1: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201569.png',
        juga_img2: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201935.png',
        juga_img3: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2207.png',
        juga_img4: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201583.png',
        juga_img5: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1627753.png'

    },
    {
        equipo: 'Indiana Pacers',
        nombre1: 'Cory Joseph',
        nombre2: 'Victor Oladipo',
        nombre3: 'Bojan Bogdanovic',
        nombre4: 'Domantas Sabonis',
        nombre5: 'Ben Moore',
        juga_img1: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202709.png',
        juga_img2: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203506.png',
        juga_img3: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202711.png',
        juga_img4: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1627734.png',
        juga_img5: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1628500.png'

    }


];

let users = [
    {
        id: '0',
        user: 'admin',
        password: '1234',
        name: 'admin',
        email: 'admin@gmail.com',
        img_user: 'https://wouri.tv/images/homme.jpg'
    }
];


// ***************************************************************

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.get('/', (req, res) => {
    res.status(200).send("Welcome to API REST")
})

// ***************************************************************

// Listar todos los partidos
app.get('/calenpartidos', (req, res) => {
    res.send(calenpartidos)
})

// Listar todos los partidos
app.get('/users', (req, res) => {
    res.send(users)
})

// Listar tabla de posiciones
app.get('/tablapos', (req, res) => {
    res.send(tablapos)
})

// Listar todos los estadios
app.get('/estadios', (req, res) => {
    res.send(estadios)
})

// Listar todos los equipos
app.get('/equipos', (req, res) => {
    res.send(equipos)
})

// Listar todos los jugadores
app.get('/jugadores', (req, res) => {
    res.send(jugadores)
})


// Validar user and pass 
app.post('/login', (req, res) => {
    let data = req.body;
    let login = [{searchUser: false,id: '0',user: '',password: '',name: '',email: '',img_user:''}];

    users.some(function (value, index, _arr) {
        if( (value.user == data.user) && (value.password == data.pass) ){
            login[0]['searchUser'] = true;
            login[0]['id'] = value.id;
            login[0]['user'] = value.user;
            login[0]['password'] = value.password;
            login[0]['name'] = value.name;
            login[0]['email'] = value.email;
            login[0]['img_user'] = value.img_user;
            return true;
        }else{
            return false;
        }
    });

    res.send(login)
})

// Metodo para crear una cuenta de usuario
app.post('/signup', (req, res) => {
    let data = req.body;
      
    let consecutive = users.length;
     /*let itemUser = {
         id: consecutive,
         user: data.user,
        password: data.pass,
         name: data.name,
         email: data.email,
         img_user: 'https://www.littlemiracles.com.au/wp-content/uploads/2015/08/kid-on-ipad.png'

     }; */

    let itemUser = {
        
        user: data.user,
        password: data.password,
        name: data.name,
        email: data.email,
        repassword: data.repassword
    };

    users.push(itemUser);
    // users.push(itemUser)
    
    res.send("")
})



// ***************************************************************
 
http.createServer(app).listen(PORT, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
})