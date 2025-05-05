
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

interface CourseProps {
  title: string;
  image: string;
  price: number;
  originalPrice: number;
  discount: string;
}

const CourseCard = ({ title, image, price, originalPrice, discount }: CourseProps) => {
  return (
    <Card className="neon-card overflow-hidden border-neon-purple/30 bg-dark-deeper">
      <CardHeader className="p-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <div className="flex items-center">
          <span className="text-neon-purple font-bold">₹{price.toLocaleString()}</span>
          <span className="text-gray-400 line-through ml-2">₹{originalPrice.toLocaleString()}</span>
        </div>
        <span className="text-green-500 font-medium">{discount} off</span>
      </CardFooter>
      <div className="p-4 pt-0">
        <Button className="w-full bg-neon-purple/20 hover:bg-neon-purple/30 text-white">
          View Details
        </Button>
      </div>
    </Card>
  );
};

const FeaturedCourses = () => {
  const courses = [
    {
      title: "Home Science Optional Course for OPSC OCS 2025-26 (BATCH 2)",
      image: "https://placekitten.com/500/300", // Replace with actual image
      price: 5000,
      originalPrice: 10000,
      discount: "50.00%"
    },
    {
      title: "GS 2 Mains Modular Course for OPSC OCS",
      image: "https://placekitten.com/501/301", // Replace with actual image
      price: 3400,
      originalPrice: 5000,
      discount: "32.00%"
    },
    {
      title: "OPSC OCS 2026 BATCH 1",
      image: "https://placekitten.com/502/302", // Replace with actual image
      price: 16000,
      originalPrice: 25000,
      discount: "36.00%"
    },
  ];

  return (
    <section id="featured" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white text-glow">
            Featured Courses
          </h2>
          <p className="text-xl text-light-gray">
            Our most popular and high-impact courses for your exam preparation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              image={course.image}
              price={course.price}
              originalPrice={course.originalPrice}
              discount={course.discount}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="neon-button text-lg py-6 px-8">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
