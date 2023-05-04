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
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold mb-2">{question}</h3>
      <p className="text-gray-500 mb-4">{answer}</p>
      <PDFDownloadLink document={<BlogPDFDocument />} fileName="blog-info.pdf">
        <button className="btn btn-info">Download PDF</button>
      </PDFDownloadLink>
    </div>
  );
};

export default BlogCard;
