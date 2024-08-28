import { Card } from "flowbite-react";


export default function Additional() {
  return (
    <div className="flex justify-center mt-[100px] mx-auto" >
      <div className="grid grid-flow-col auto-cols-max gap-8 ">
  <div>
  <Card
      className="max-w-60 bg-[#22333b] animate__animated animate__fadeInDown animate__delay-0s"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://static.vecteezy.com/system/resources/previews/003/549/818/non_2x/number-one-index-finger-on-white-background-free-photo.jpg"
    >
      <h6 className="text-sm text-center font-bold tracking-tight text-[#ffe6a7]">
        Syahadat
      </h6>
      {/* <p className="font-normal text-gray-700 dark:text-gray-400">
      </p> */}
    </Card>
  </div>
  <div>
  <Card
      className="max-w-60 bg-[#00000] animate__animated animate__fadeInDown animate__delay-1s"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://www.sinarharian.com.my/uploads/images/2024/02/02/2522685.jpg"
    >
      <h6 className="text-sm text-center font-bold tracking-tight text-[#f2f4f3]">
        Shalat
      </h6>
      {/* <p className="font-normal text-gray-700 dark:text-gray-400">
      </p> */}
    </Card>
  </div>
  <div>
  <Card
      className="max-w-60 bg-[#22333b] animate__animated animate__fadeInDown animate__delay-2s"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://mirror.mui.or.id/wp-content/uploads/2021/05/zakat-fitrah-dan-maal.jpeg"
    >
      <h6 className="text-sm text-center font-bold tracking-tight text-[#ffe6a7]">
        Zakat 
      </h6>
      {/* <p className="font-normal text-gray-700 dark:text-gray-400">
      </p> */}
    </Card>
  </div>
  <div>
  <Card
      className="max-w-60 bg-[#0000] animate__animated animate__fadeInDown animate__delay-3s"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://dinkes.sultengprov.go.id/wp-content/uploads/2023/04/Apa-Saja-Manfaat-Puasa-Untuk-Kesehatan-Tubuh-scaled.jpg"
    >
      <h6 className="text-sm text-center font-bold tracking-tight text-[#f2f4f3]">
        Puasa
      </h6>
      {/* <p className="font-normal text-gray-700 dark:text-gray-400">
      </p> */}
    </Card>
  </div>
  <div>
  <Card
      className="max-w-60 bg-[#22333b] animate__animated animate__fadeInDown animate__delay-4s"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://mirror.mui.or.id/wp-content/uploads/2023/02/images-4.jpeg"
    >
      <h6 className="text-sm text-center font-bold tracking-tight text-[#ffe6a7]">
        Haji
      </h6>
      {/* <p className="font-normal text-gray-700 dark:text-gray-400">
      </p> */}
    </Card>
  </div>
</div>
    </div>
  )
}
