import React from "react";
import {
  PDFDownloadLink,
  Page,
  Text,
  View,
  Document,
} from "@react-pdf/renderer";

const BlogCard = ({ blog }) => {
  const { question, answer } = blog;
  // define a document for pdf
  const BlogPDFDocument = () => (
    <Document>
      <Page>
        <View>
          <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>
            {question}
          </Text>

          <Text style={{ fontSize: 12, marginBottom: 8 }}>{answer}</Text>
        </View>
      </Page>
    </Document>
  );
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 relative">
      <h3 className="text-xl font-bold mb-2">{question}</h3>
      <p className="text-gray-500 mb-4">{answer}</p>
      <br />
      <br />
      {/*download defined pdf  */}
      <PDFDownloadLink document={<BlogPDFDocument />} fileName="blog-info.pdf">
        <button className="font-medium btn btn-info absolute inset-x-4 bottom-4 bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600 text-white font-semibold py-2 px-4 border border-red-600 rounded-lg shadow-md transition duration-300 ease-in-out">Download PDF</button>
      </PDFDownloadLink>
    </div>
  );
};

export default BlogCard;
