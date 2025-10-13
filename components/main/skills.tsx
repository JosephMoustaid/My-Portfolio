'use client';

import { motion } from "framer-motion";
import { SkillText } from "@/components/sub/skill-text";
import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  OTHER_SKILL,
  DATA_ENGINEERING_SKILL,
} from "@/constants";
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact,
  SiFramer, SiSass, SiSpring, SiPython, SiNodedotjs,
  SiOracle, SiMongodb, SiApachekafka, SiApachespark, SiApacheairflow,
  SiApachehadoop, SiApacheflink, SiApachecassandra,
  SiGraphql, SiPostgresql, SiMysql,
  SiGit, SiDocker, SiGo, SiApachemaven, SiGradle, SiAmazonaws, SiKubernetes
} from 'react-icons/si';
import { FaJava, FaDatabase } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { TbBrandHipchat } from 'react-icons/tb';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, type: "spring" },
  },
};

const skillIconMap: { [key: string]: IconType } = {
  'HTML': SiHtml5,
  'CSS': SiCss3,
  'JavaScript': SiJavascript,
  'React': SiReact,
  'Framer Motion': SiFramer,
  'SASS': SiSass,
  'Java': FaJava,
  'Spring Boot': SiSpring,
  'Python': SiPython,
  'Node.js': SiNodedotjs,
  'Oracle': SiOracle,
  'MongoDB': SiMongodb,
  'PostgreSQL': SiPostgresql,
  'MySQL': SiMysql,
  'Cassandra': SiApachecassandra,
  'Apache Spark': SiApachespark,
  'Apache Kafka': SiApachekafka,
  'Apache Airflow': SiApacheairflow,
  'Hadoop': SiApachehadoop,
  'HDFS': FaDatabase,
  'HBase': FaDatabase,
  'Apache Flink': SiApacheflink,
  'GraphQL': SiGraphql,
  'Git': SiGit,
  'Docker': SiDocker,
  'AWS': SiAmazonaws,
  'Kubernetes': SiKubernetes,
  'Go': SiGo,
  'Maven': SiApachemaven,
  'Gradle': SiGradle,
};

const skillColorMap: { [key: string]: string } = {
  'HTML': 'text-orange-500',
  'CSS': 'text-blue-500',
  'JavaScript': 'text-yellow-400',
  'React': 'text-cyan-400',
  'Framer Motion': 'text-pink-500',
  'SASS': 'text-pink-400',
  'Java': 'text-red-500',
  'Spring Boot': 'text-green-500',
  'Python': 'text-blue-400',
  'Node.js': 'text-green-500',
  'Oracle': 'text-red-500',
  'MongoDB': 'text-green-500',
  'PostgreSQL': 'text-blue-400',
  'MySQL': 'text-blue-500',
  'Cassandra': 'text-blue-300',
  'Apache Spark': 'text-orange-500',
  'Apache Kafka': 'text-white',
  'Apache Airflow': 'text-red-400',
  'Hadoop': 'text-yellow-400',
  'HDFS': 'text-yellow-500',
  'HBase': 'text-orange-400',
  'Apache Flink': 'text-pink-500',
  'GraphQL': 'text-pink-500',
  'Git': 'text-orange-500',
  'Docker': 'text-blue-500',
  'AWS': 'text-orange-400',
  'Kubernetes': 'text-blue-400',
  'Go': 'text-cyan-400',
  'Maven': 'text-red-400',
  'Gradle': 'text-green-400',
};

const SkillCard = ({ name }: { name: string }) => {
  const Icon = skillIconMap[name];
  const colorClass = skillColorMap[name] || 'text-gray-400';

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group relative flex flex-col items-center justify-center 
                 w-28 h-28 rounded-2xl bg-gradient-to-br from-[#0c0c1d]/80 to-[#111132]/80
                 border border-gray-700/50 hover:border-purple-500/50
                 backdrop-blur-md transition-all duration-300 cursor-pointer
                 shadow-lg hover:shadow-purple-500/20 hover:shadow-2xl"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-cyan-500/0 
                      group-hover:from-purple-500/10 group-hover:to-cyan-500/10 
                      rounded-2xl transition-all duration-300" />
      
      {/* Icon */}
      <div className="relative z-10">
        {Icon ? (
          <Icon className={`w-12 h-12 ${colorClass} transition-all duration-300 
                           group-hover:scale-110 drop-shadow-lg`} />
        ) : (
          <div className={`w-12 h-12 ${colorClass} flex items-center justify-center 
                          text-2xl font-bold transition-all duration-300`}>
            {name.charAt(0)}
          </div>
        )}
      </div>

      {/* Skill name */}
      <div className="relative z-10 mt-3 text-white text-xs font-medium text-center 
                      px-2 transition-all duration-300 group-hover:text-purple-300">
        {name}
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ 
  title, 
  skills 
}: { 
  title: string; 
  skills: readonly { readonly skill_name: string; readonly image: string; readonly width: number; readonly height: number }[]; 
}) => (
  <div className="w-full mb-16">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 inline-block">
        {title}
      </h3>
      <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
    </motion.div>
    
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-6 justify-items-center"
    >
      {skills.map((skill) => (
        <SkillCard 
          key={skill.skill_name} 
          name={skill.skill_name}
        />
      ))}
    </motion.div>
  </div>
);

export const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center relative overflow-hidden py-20 px-4 md:px-8"
    >
      <SkillText />

      <div className="w-full max-w-7xl mx-auto mt-16 space-y-16 z-10">
        <SkillCategory title="Data Engineering & Big Data" skills={DATA_ENGINEERING_SKILL} />
        <SkillCategory title="Backend & Databases" skills={BACKEND_SKILL} />
        <SkillCategory title="DevOps & Cloud" skills={FULLSTACK_SKILL} />
        <SkillCategory title="Frontend Development" skills={FRONTEND_SKILL} />
        <SkillCategory title="Other Technologies" skills={OTHER_SKILL} />
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
