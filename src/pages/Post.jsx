import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';

const Post = () => {
  const [postData, setPostData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const getPostData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      if (response?.status === 200) {
        setPostData(response?.data);
      }
    } catch (error) {
      console.log(error);
      alert('Error fetching data');
    }
  };

  const totalPages = Math.ceil(postData.length / postsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const currentPosts = postData.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div className="w-full min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
        {postData.length <= 0 && (
          <div className="flex justify-center mb-4">
            <Button onClick={getPostData} className="bg-blue-600 hover:bg-blue-700 text-white">
              Get Data
            </Button>
          </div>
        )}

        {postData.length > 0 && (
          <>
            <h2 className="text-2xl font-bold mb-4 text-center">Posts Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-200 text-gray-700">
                    <th className="py-2 px-4 border">S.N.</th>
                    <th className="py-2 px-4 border">User ID</th>
                    <th className="py-2 px-4 border">Post ID</th>
                    <th className="py-2 px-4 border">Title</th>
                  </tr>
                </thead>
                <tbody>
                  {currentPosts.map((item, index) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="py-2 px-4 border text-center">
                        {(currentPage - 1) * postsPerPage + index + 1}
                      </td>
                      <td className="py-2 px-4 border text-center">{item.userId}</td>
                      <td className="py-2 px-4 border text-center">{item.id}</td>
                      <td className="py-2 px-4 border">{item.title}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-between items-center mt-6">
              <Button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="bg-gray-500 hover:bg-gray-600 text-white disabled:opacity-50"
              >
                Previous
              </Button>

              <span className="text-gray-700 font-medium">
                Page {currentPage} of {totalPages}
              </span>

              <Button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="bg-gray-500 hover:bg-gray-600 text-white disabled:opacity-50"
              >
                Next
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Post;
