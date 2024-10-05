import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Detail from './components/Detail'
import Cart from './components/Cart'
import { createBrowserRouter, json, RouterProvider } from 'react-router-dom'


function App() {
  const [product, setProduct] = useState([
    {
      url: '../Product Images/img1.jpg',
      url1: '../Product Images/img1.1.jpg',
      url2: '../Product Images/img1.2.jpg',
      name: "Bold Geometric Diamond Ring",
      about: "Make your mark everyday when you adorn this contemporary ring crafted in 18 karat rose gold, studded with diamonds",
      GrossWeight: 1.996,
      GoldPurity: 18,
      Brand: "Tanishq",
      Collection: "Glamdays",
      Gender: "Women",
      Occasion: "Casual Wear",
      GoldRate: 4301.82,
      GST: 165.3,
      plainGoldValue: 3015.54,
      makingCharges: 2014.32,
      discount: 52100.10


    },
    {
      url: '../Product Images/img2.jpg',
      url1: '../Product Images/img2.2.jpg',
      url2: '../Product Images/img2.3.jpg',
      name: "Graceful Charm Floral Ring",
      about: "Grace yourself with a touch of refined uniqueness and enduring elegance through this floral ring crafted in 18 karat yellow gold.",
      GrossWeight: 3.151,
      GoldPurity: 18,
      Brand: "Tanishq",
      Collection: "Bestsellers",
      Gender: "Women",
      Occasion: "Casual Wear",
      GoldRate: 4301.82,
      GST: 205.3,
      plainGoldValue: 2145.54,
      makingCharges: 1024.32,
      discount: 3585.24

    },
    {
      url: '../Product Images/img3.jpg',
      url1: '../Product Images/img3.1.jpg',
      url2: '../Product Images/img3.2.jpg',
      name: "Sublime Crossover Diamond Ring",
      about: "Turn your daily outfits into sublime ensembles with this contemporary diamond ring crafted in 18 karat rose gold with a high polish finish.",
      GrossWeight: 2.309,
      GoldPurity: 18,
      Brand: "Tanishq",
      Collection: "Glamdays",
      Gender: "Women",
      Occasion: "Casual Wear",
      GoldRate: 4301.82,
      GST: 154.3,
      plainGoldValue: 1245.54,
      makingCharges: 1024.32,
      discount: 2545.13
    },
    {
      url: '../Product Images/img4.jpg',
      url1: '../Product Images/img4.1.jpg',
      name: "Chic Dual Tone Diamond Ring",
      about: "2 gram 22 Karat Gold Coin with Guru Nanak Design",
      GrossWeight: 2.309,
      GoldPurity: 22,
      Brand: "Tanishq",
      Collection: "Bestsellers",
      GoldRate: 4301.82,
      GST: 324.3,
      plainGoldValue: 2345.15,
      makingCharges: 1024.32,
      discount: 3795.25
    },
    {
      url: '../Product Images/img5.jpg',
      url1: '../Product Images/img5.1.jpg',
      name: "Charming Jali Stud Earrings",
      about: "Grace yourself with a touch of refined uniqueness and enduring elegance through this floral ring crafted in 18 karat yellow gold.",
      GrossWeight: 3.151,
      GoldPurity: 18,
      Brand: "Tanishq",
      Collection: "Bestsellers",
      Gender: "Women",
      Occasion: "Casual Wear",
      GoldRate: 4301.82,
      GST: 451.3,
      plainGoldValue: 4578.54,
      makingCharges: 1024.32,
      discount: 6154.45
    },
    {
      url: '../Product Images/img6.jpg',
      url1: '../Product Images/img6.1.jpg',
      url2: '../Product Images/img6.2.jpg',
      name: "Starry Dual Tone Diamond Stud Earrings",
      about: "Make your mark everyday when you adorn this contemporary ring crafted in 18 karat rose gold, studded with diamonds",
      GrossWeight: 1.996,
      GoldPurity: 18,
      Brand: "Tanishq",
      Collection: "Glamdays",
      Gender: "Women",
      Occasion: "Casual Wear",
      GoldRate: 4301.82,
      GST: 178.3,
      plainGoldValue: 1254.54,
      makingCharges: 1024.32,
      discount: 2545.13
    },
    {
      url: '../Product Images/img7.jpg',
      url1: '../Product Images/img7.1.jpg',
      url2: '../Product Images/img7.2.jpg',
      name: "Sharp Stacked Diamond Ring",
      about: "Add radiant allure to your ensembles with this uniquely designed ring crafted in 18 karat yellow gold, with modern polki",
      GrossWeight: 3.29,
      GoldPurity: 18,
      Brand: "Tanishq",
      Collection: " Modern Polki",
      Gender: "Women",
      Occasion: "Modern Wear",
      GoldRate: 4301.82,
      GST: 248.3,
      plainGoldValue: 3548.54,
      makingCharges: 1024.32,
      discount: 4910.47
    },
    {
      url: '../Product Images/img8.jpg',
      url1: '../Product Images/img8.1.jpg',
      url2: '../Product Images/img8.2.jpg',
      name: "Exquisite Dome Ring",
      about: "Pretty pink stone nestles in a teardrop pattern hoisted by scintillating diamonds making this lovely ring, that will make every head turn!",
      GrossWeight: 2.982,
      GoldPurity: 18,
      Brand: "Tanishq",
      Collection: "Pretty in Pink",
      Gender: "Women",
      Occasion: "Modern Wear",
      GoldRate: 4301.82,
      GST: 223.3,
      plainGoldValue: 2689.15,
      makingCharges: 1024.32,
      discount: 4025.36

    },
    {
      url: '../Product Images/img9.jpg',
      url1: '../Product Images/img9.1.jpg',
      url2: '../Product Images/img9.2.jpg',
      name: "Contemporary Crossover Diamond Ring",
      about: "Turn your daily outfits into sublime ensembles with this contemporary diamond ring crafted in 18 karat rose gold with a high polish finish.",
      GrossWeight: 2.309,
      GoldPurity: 18,
      Brand: "Tanishq",
      Collection: "Glamdays",
      Gender: "Women",
      Occasion: "Casual Wear",
      GoldRate: 4301.82,
      GST: 297.3,
      plainGoldValue: 4578.20,
      makingCharges: 1024.32,
      discount: 4301.82

    },
    {
      url: '../Product Images/img10.jpg',
      url1: '../Product Images/img10.1.jpg',
      url2: '../Product Images/img10.2.jpg',
      name: "Modern Beauty Diamond Drop Earrings",
      about: "Make your mark everyday when you adorn this contemporary ring crafted in 18 karat rose gold, studded with diamonds",
      GrossWeight: 1.996,
      GoldPurity: 22,
      Brand: "Tanishq",
      Collection: "Glamdays",
      Gender: "Women",
      Occasion: "Casual Wear",
      GoldRate: 4301.82,
      GST: 312.3,
      plainGoldValue: 3154.58,
      makingCharges: 1024.32,
      discount: 4514.75
    }
  ])
  const [ProductInfo, setProductInfo] = useState([])
  const [AddCart, setAddCart] = useState([])

  useEffect(() => {
    let cartString = localStorage.getItem("AddCart")
    if (cartString) {
      let AddCart = JSON.parse(localStorage.getItem("AddCart"))
      setAddCart(AddCart)
    }
  }, [])



  const addToCart = (data) => {
    setAddCart([...AddCart, { ...data }])
  }
  const saveTLS = (params) => {
    localStorage.setItem("AddCart", JSON.stringify(AddCart))
  }



  const productDetail = (data) => {
    setProductInfo([data])
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar count={AddCart.length} /><Home product={product} productDetail={productDetail} /></>
    },
    {
      path: "/detail",
      element: <><Navbar count={AddCart.length} /><Detail ProductInfo={ProductInfo} addToCart={addToCart} saveTLS={saveTLS} /></>
    },
    {
      path: "/cart",
      element: <><Navbar count={AddCart.length} /><Cart AddCart={AddCart} saveTLS={saveTLS} /></>
    },
  ])


  return (

    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App
