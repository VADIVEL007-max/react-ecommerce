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
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setSingleproduct(data);
        setMainImage(data.thumbnail); // Set initial main image
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
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-800">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <section className="min-h-screen bg-white dark:bg-gray-800 py-12 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* BREADCRUMB */}
          <nav className="flex mb-8 text-sm text-gray-500 dark:text-gray-400" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link to="/" className="hover:text-blue-600 dark:hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                  <span className="ml-1 md:ml-2 capitalize">{singleproduct.category}</span>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                  <span className="ml-1 md:ml-2 text-gray-700 dark:text-gray-200 font-medium truncate max-w-[200px] md:max-w-none">{singleproduct.title}</span>
                </div>
              </li>
            </ol>
          </nav>

          {/* MAIN GRID */}
          <div className="flex flex-col lg:flex-row gap-12 relative">

            {/* LEFT SIDE - IMAGES */}
            <div className="lg:w-1/2 flex flex-col gap-6">

              {/* MAIN IMAGE (ZOOM EFFECT) */}
              <div className="relative w-full aspect-square bg-gray-50 dark:bg-gray-700/50 rounded-3xl overflow-hidden group shadow-lg backdrop-blur-sm border border-gray-100 dark:border-gray-700">
                <img
                  src={mainImage}
                  alt={singleproduct.title}
                  className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500 ease-out"
                />
              </div>

              {/* THUMBNAILS */}
              <div className="flex gap-4 overflow-x-auto pb-2 custom-scrollbar">
                {singleproduct.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setMainImage(img)}
                    className={`flex-shrink-0 w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${mainImage === img
                      ? 'border-blue-500 shadow-md scale-105'
                      : 'border-transparent hover:border-gray-300 dark:hover:border-gray-600 opacity-70 hover:opacity-100'
                      }`}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover bg-gray-50 dark:bg-gray-700"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE - DETAILS (STICKY) */}
            <div className="lg:w-1/2">
              <div className="sticky top-10 flex flex-col">

                {/* CATEGORY & TAGS */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-sm border border-blue-200 dark:border-blue-800">
                    {singleproduct.category}
                  </span>
                  {singleproduct.tags?.map(tag => (
                    <span key={tag} className="bg-gray-100/80 text-gray-700 dark:bg-gray-700/50 dark:text-gray-300 px-4 py-1.5 rounded-full text-sm font-medium capitalize backdrop-blur-sm border border-gray-200 dark:border-gray-600">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* TITLE */}
                <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight">
                  {singleproduct.title}
                </h1>

                {/* BRAND & SKU */}
                <div className="flex items-center gap-4 mt-4">
                  <p className="text-lg text-gray-500 dark:text-gray-400">
                    Brand: <span className="font-bold text-gray-900 dark:text-gray-100">{singleproduct.brand || 'Generic'}</span>
                  </p>
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                  <p className="text-sm font-mono text-gray-400 dark:text-gray-500 tracking-wider">
                    SKU: {singleproduct.sku}
                  </p>
                </div>

                {/* RATING */}
                <div className="flex items-center gap-3 mt-5 bg-gray-50 dark:bg-gray-800/50 w-fit px-4 py-2 rounded-2xl border border-gray-100 dark:border-gray-700">
                  <div className="flex text-yellow-400 text-lg">
                    {'★'.repeat(Math.round(singleproduct.rating))}{'☆'.repeat(5 - Math.round(singleproduct.rating))}
                  </div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {singleproduct.rating} <span className="text-gray-400 font-normal">Rating</span>
                  </p>
                </div>

                {/* PRICE SECTION */}
                <div className="flex items-baseline gap-4 mt-8">
                  <h2 className="text-5xl font-black text-gray-900 dark:text-white">
                    ${singleproduct.price}
                  </h2>
                  <div className="flex flex-col">
                    <span className="text-lg text-gray-400 line-through decoration-red-500/50 decoration-2">
                      ${(singleproduct.price / (1 - singleproduct.discountPercentage / 100)).toFixed(2)}
                    </span>
                    <span className="text-sm font-bold text-green-500 bg-green-100/50 dark:bg-green-900/30 px-2 py-0.5 rounded text-center mt-1">
                      {singleproduct.discountPercentage}% OFF
                    </span>
                  </div>
                </div>

                {/* STOCK */}
                <div className="mt-6 flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <p className="text-lg font-semibold text-green-600 dark:text-green-400">
                    {singleproduct.availabilityStatus}
                  </p>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                    {singleproduct.stock} items left
                  </p>
                </div>

                {/* DESCRIPTION */}
                <div className="mt-8 prose prose-gray dark:prose-invert">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                    {singleproduct.description}
                  </p>
                </div>

                {/* ACTIONS */}
                <div className="flex gap-4 mt-10">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-2xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all duration-300">
                    Add to Cart
                  </button>
                  <button className="flex-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 font-bold py-4 px-8 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                    Buy Now
                  </button>
                </div>

                {/* INFO CARDS (GLASSMORPHISM) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
                  <div className="bg-gray-50/80 dark:bg-gray-800/60 backdrop-blur-md p-6 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <span className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">🚚</span>
                      Shipping & Returns
                    </h3>
                    <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        {singleproduct.shippingInformation}
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        {singleproduct.returnPolicy}
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        {singleproduct.warrantyInformation}
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50/80 dark:bg-gray-800/60 backdrop-blur-md p-6 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <span className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">⚙️</span>
                        Specifications
                      </h3>
                      <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                        <li className="flex items-center justify-between">
                          <span>Weight</span>
                          <span className="font-medium text-gray-900 dark:text-white">{singleproduct.weight}</span>
                        </li>
                        {singleproduct.dimensions && (
                          <li className="flex items-center justify-between">
                            <span>Dimensions</span>
                            <span className="font-medium text-gray-900 dark:text-white text-right">
                              {singleproduct.dimensions.width}w × {singleproduct.dimensions.height}h × {singleproduct.dimensions.depth}d
                            </span>
                          </li>
                        )}
                        <li className="flex items-center justify-between">
                          <span>Min Order</span>
                          <span className="font-medium text-gray-900 dark:text-white">{singleproduct.minimumOrderQuantity} pcs</span>
                        </li>
                      </ul>
                    </div>
                    {singleproduct.meta?.qrCode && (
                      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center gap-4">
                        <div className="p-1 bg-white rounded-lg shadow-sm">
                          <img src={singleproduct.meta.qrCode} alt="QR Code" className="w-10 h-10" />
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Scan for authenticity</span>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* REVIEWS SECTION */}
          <div className="mt-24 pt-12 border-t border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-10 text-center">
              Customer Reviews
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {singleproduct.reviews?.map((review, index) => (
                <div
                  key={index}
                  className="bg-white/60 dark:bg-gray-800/40 backdrop-blur-xl p-8 rounded-[2rem] border border-gray-100 dark:border-gray-700/50 shadow-xl shadow-gray-200/20 dark:shadow-none hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                        {review.reviewerName.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                          {review.reviewerName}
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {new Date(review.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                      </div>
                    </div>
                    <div className="bg-yellow-100/50 dark:bg-yellow-900/20 px-3 py-1 rounded-full flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span className="font-bold text-yellow-700 dark:text-yellow-500">{review.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed italic relative">
                    <span className="text-4xl text-gray-300 dark:text-gray-600 absolute -top-4 -left-2">"</span>
                    <span className="relative z-10 pl-4">{review.comment}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Productdetials;