const propiedades_venta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: "4 Habitaciones | ",
        baños: "4 baños",
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: "2 Habitaciones | ",
        baños: "2 baños",
        costo: 1200,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: '"https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg"',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: "3 Habitaciones | ",
        baños: "3 baños",
        costo: 4500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Departamento en pleno centro de Santiago',
        src: './assets/img/las_condes.jpg',
        descripcion: 'Este departamento está ubicado en pleno Las Condes, un barrio residencial de los mas destacados de la capital',
        ubicacion: 'Avenida Apoquindo 883, Las Condes',
        habitaciones: "2 Habitaciones | ",
        baños: "2 baños",
        costo: 3000,
        smoke: false,
        pets: false
    }
]

const propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: '"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: "2 Habitaciones | ",
        baños: "2 baños",
        costo: 2.000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: "3 Habitaciones | ",
        baños: "3 baños",
        costo: 2.500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: "2 Habitaciones | ",
        baños: "2 baños",
        costo: 2.200,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Departamento en prestigioso condominio en Algarrobo',
        src: './assets/img/san_alfonso_del_mar.jpg',
        descripcion: 'Este departamento está ubicado en el Condominio San Alfonso del Mar',
        ubicacion: 'Camino Algarrobo Mirasol 886, Algarrobo',
        habitaciones: "2 Habitaciones | ",
        baños: "2 baños",
        costo: 3000,
        smoke: false,
        pets: false
    }
]

let venta = document.querySelector("#venta")
let htmlVenta = ""

let alquiler = document.querySelector("#alquiler")
let htmlAlquiler = ""

for (let i = 0; i < 3; i++) {
    propiedades_venta[i]
    htmlVenta += `<div class="col-md-4 mb-4">
                <div class="card">
                    <img src=${propiedades_venta[i].src} class="card-img-top" alt="Imagen del departamento"/>
                    <div class="card-body">
                        <h5 class="card-title">${propiedades_venta[i].nombre}</h5>
                        <p class="card-text">${propiedades_venta[i].descripcion}</p>
                        <p><i class="fas fa-map-marker-alt"></i>${propiedades_venta[i].ubicacion}</p>
                        <p><i class="fas fa-bed"></i>${propiedades_venta[i].habitaciones}<i class="fas fa-bath"></i>${propiedades_venta[i].baños}</p>
                        <p><i class="fas fa-dollar-sign"></i>${propiedades_venta[i].costo}</p>
                        <p id = "smoke"></p>
                        <p id = "pets"></p>`

    if (propiedades_venta[i].smoke === false) {
        htmlVenta += `   <p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`
    } else {
        htmlVenta += `   <p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
    }

    if (propiedades_venta[i].pets === false) {
        htmlVenta += `   <p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>
                    </div>
                </div>
            </div>`
    } else {
        htmlVenta += `    <p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>
                    </div>
                </div>
            </div>`
    }
}


venta.innerHTML = htmlVenta


for (let i = 0; i < 3; i++) {
    propiedades_alquiler[i]
    htmlAlquiler += `<div class="col-md-4 mb-4">
                <div class="card">
                    <img src=${propiedades_alquiler[i].src} class="card-img-top" alt="Imagen del departamento"/>
                    <div class="card-body">
                        <h5 class="card-title">${propiedades_alquiler[i].nombre}</h5>
                        <p class="card-text">${propiedades_alquiler[i].descripcion}</p>
                        <p><i class="fas fa-map-marker-alt"></i>${propiedades_alquiler[i].ubicacion}</p>
                        <p><i class="fas fa-bed"></i>${propiedades_alquiler[i].habitaciones}<i class="fas fa-bath"></i>${propiedades_alquiler[i].baños}</p>
                        <p><i class="fas fa-dollar-sign"></i>${propiedades_alquiler[i].costo}</p>
                        <p id = "smoke"></p>
                        <p id = "pets"></p>`

    if (propiedades_alquiler[i].smoke === false) {
        htmlAlquiler += `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`
    } else {
        htmlAlquiler += `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
    }

    if (propiedades_alquiler[i].pets === false) {
        htmlAlquiler += `<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>
                    </div>
                </div>
            </div>`
    } else {
        htmlAlquiler += `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>
                    </div>
                </div>
            </div>`
    }
}

alquiler.innerHTML = htmlAlquiler