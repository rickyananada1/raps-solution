import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Tailored IT Solutions for Your Business",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: GlobeAltIcon,
  },
  {
    name: "End-to-End Support for Every Project",
    description:
      "Enjoy full support at every stage of your IT project. We offer consultation, development, and implementation to ensure that the solutions we deliver align with your business vision and goals.",
    icon: ScaleIcon,
  },
  {
    name: "Comprehensive IT Reporting",
    description:
      "We provide over 30+ analytical reports covering various aspects of your IT infrastructure, from application performance to server and network status. Monitor your system’s performance in real-time and optimize your business operations.",
    icon: LightningBoltIcon,
  },
  {
    name: "Expertise in IT Development & Integration",
    description:
      "We offer a wide range of services, including application development, IoT implementation, and system and cloud service integration. With our expertise, we help you enhance efficiency and drive technological innovation within your business.",
    icon: AnnotationIcon,
  },
];

export default function Features() {
  return (
    <div className="mb-12 py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center py-10">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Raps Solution
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A Better Way to Manage Your IT Solutions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          With Raps Solution, you get simple yet powerful software for managing IT infrastructure, including application development, server deployment, IoT systems, cloud services, and digital integrations. Its robust reporting capabilities and analytics make it the best choice for overseeing all your IT operations efficiently.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
