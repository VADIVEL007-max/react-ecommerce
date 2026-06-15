import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "./Loader";

const Productdetials = () => {
  const { id } = useParams();
  const [singleproduct, setSingleproduct] = useState(null);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://react-ecommerce-backend-pb9m.onrender.com/products/${id}`);
        const data = await res.json();
        setSingleproduct(data.data);
        setMainImage(data.data.product_thumbnail); // Set initial main image
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (!singleproduct) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <Loader />
      </div>
    );
  }

  // Calculate discounted price
  const price = parseFloat(singleproduct.product_price);
  const discount = parseFloat(singleproduct.product_discountPercentage) || 0;
  const originalPrice = discount > 0 ? price / (1 - discount / 100) : price;

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BREADCRUMB */}
        <nav className="flex mb-8 text-sm text-gray-500 dark:text-gray-400" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link to="/" className="hover:text-blue-600 dark:hover:text-white transition-colors">Home</Link>
            </li>
            {singleproduct.product_tag && singleproduct.product_tag.length > 0 && (
              <li>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                  <span className="ml-1 md:ml-2 capitalize">{singleproduct.product_tag[0]}</span>
                </div>
              </li>
            )}
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                <span className="ml-1 md:ml-2 text-gray-700 dark:text-gray-200 font-medium truncate max-w-[200px] md:max-w-none">{singleproduct.product_title}</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* MAIN CONTENT GRID */}
        <div className="flex flex-col lg:flex-row gap-12 relative">
          
          {/* LEFT SIDE - IMAGES */}
          <div className="lg:w-1/2 flex flex-col gap-6">
            <div className="relative w-full aspect-square bg-white dark:bg-gray-800 rounded-3xl overflow-hidden group shadow-xl border border-gray-100 dark:border-gray-700 flex items-center justify-center">
              <img
                src={mainImage}
                alt={singleproduct.product_title}
                className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>

            {/* THUMBNAILS */}
            {singleproduct.product_image && singleproduct.product_image.length > 0 && (
              <div className="flex gap-4 overflow-x-auto pb-2 custom-scrollbar">
                {singleproduct.product_image.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setMainImage(img)}
                    className={`flex-shrink-0 w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${mainImage === img
                      ? 'border-blue-600 shadow-lg scale-105'
                      : 'border-transparent hover:border-blue-300 dark:hover:border-blue-700 opacity-70 hover:opacity-100 bg-white dark:bg-gray-800'
                      }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-contain p-2"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT SIDE - DETAILS (STICKY) */}
          <div className="lg:w-1/2">
            <div className="sticky top-10 flex flex-col">
              
              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mb-4">
                {singleproduct.product_tag?.map(tag => (
                  <span key={tag} className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 px-4 py-1.5 rounded-full text-sm font-semibold capitalize border border-blue-200/50 dark:border-blue-800/50 shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>

              {/* TITLE */}
              <h1 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white leading-tight tracking-tight mb-2">
                {singleproduct.product_title}
              </h1>

              {/* BRAND */}
              <div className="flex items-center gap-4 mt-2 mb-6">
                <p className="text-lg text-gray-500 dark:text-gray-400">
                  Brand: <span className="font-bold text-gray-900 dark:text-gray-100">{singleproduct.product_brand || 'Generic'}</span>
                </p>
                <div className="flex items-center gap-2 bg-yellow-50 dark:bg-yellow-900/20 px-3 py-1 rounded-full border border-yellow-200/50 dark:border-yellow-700/50">
                  <span className="text-yellow-400 text-lg">★</span>
                  <span className="font-bold text-yellow-700 dark:text-yellow-500">{singleproduct.product_rating}</span>
                </div>
              </div>

              {/* PRICE */}
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-8">
                <div className="flex items-baseline gap-4">
                  <h2 className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                    ₹{price.toLocaleString('en-IN')}
                  </h2>
                  {discount > 0 && (
                    <div className="flex flex-col">
                      <span className="text-lg text-gray-400 line-through decoration-red-500/50 decoration-2">
                        ₹{originalPrice.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                      </span>
                      <span className="text-sm font-bold text-emerald-600 bg-emerald-100/50 dark:bg-emerald-900/30 dark:text-emerald-400 px-2 py-0.5 rounded text-center mt-1">
                        {singleproduct.product_discountPercentage}% OFF
                      </span>
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Inclusive of all taxes</p>
              </div>

              {/* ACTIONS */}
              <div className="flex gap-4 mb-10">
                <button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-2xl shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                  Add to Cart
                </button>
                <button className="flex-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 font-bold py-4 px-8 rounded-2xl shadow-xl shadow-gray-900/20 dark:shadow-white/10 transform hover:-translate-y-1 transition-all duration-300">
                  Buy Now
                </button>
              </div>

              {/* HIGHLIGHTS */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-4 rounded-2xl border border-gray-100 dark:border-gray-700 flex items-start gap-3 hover:bg-white dark:hover:bg-gray-800 transition-colors duration-300">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-sm">Premium Quality</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Guaranteed authentic products</p>
                  </div>
                </div>
                <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-4 rounded-2xl border border-gray-100 dark:border-gray-700 flex items-start gap-3 hover:bg-white dark:hover:bg-gray-800 transition-colors duration-300">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-sm">Secure Payment</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">100% secure checkout</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Productdetials;