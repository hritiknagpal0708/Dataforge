// [icon, name, caption, iconColorClass]
export const techCategories = [
  { id: 'engineering', label: 'Data Engineering', grid: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7', pad: 'p-4', items: [
    ['terminal', 'Python', 'Language Core', 'text-primary'], ['database', 'SQL', 'Query Engine', 'text-secondary'],
    ['flash_on', 'Apache Spark', 'Distributed Core', 'text-primary-container'], ['memory', 'PySpark', 'Scale Processing', 'text-tertiary-fixed-dim'],
    ['layers', 'Databricks', 'Unified Lakehouse', 'text-primary-container'], ['schedule', 'Apache Airflow', 'DAG Orchestration', 'text-secondary'],
    ['conversion_path', 'dbt', 'Data Transformation', 'text-primary'] ] },
  { id: 'cloud', label: 'Cloud Platforms', grid: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-5', pad: 'p-5', items: [
    ['cloud', 'Microsoft Azure', 'Enterprise Cloud', 'text-secondary'], ['cloud_done', 'AWS', 'Cloud Ecosystem', 'text-primary'],
    ['cloud_queue', 'Google Cloud', 'BigQuery & Vertex', 'text-primary-container'], ['alt_route', 'Azure Data Factory', 'Managed Pipelines', 'text-secondary'],
    ['folder_zip', 'ADLS Gen2', 'Enterprise Data Lake', 'text-tertiary-fixed-dim'] ] },
  { id: 'warehousing', label: 'Databases & Warehousing', grid: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-5', pad: 'p-5', items: [
    ['ac_unit', 'Snowflake', 'Data Cloud', 'text-primary-container'], ['sync_alt', 'Azure Synapse', 'Analytics Service', 'text-secondary'],
    ['data_array', 'PostgreSQL', 'Relational Engine', 'text-primary'], ['dns', 'SQL Server', 'Enterprise RDBMS', 'text-tertiary-fixed-dim'],
    ['change_history', 'Delta Lake', 'ACID Storage Layer', 'text-primary-container'] ] },
  { id: 'datascience', label: 'Data Science & AI', grid: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-6', pad: 'p-4', items: [
    ['hub', 'TensorFlow', 'Deep Learning', 'text-secondary'], ['local_fire_department', 'PyTorch', 'Neural Networks', 'text-primary-container'],
    ['science', 'Scikit-learn', 'Statistical ML', 'text-primary'], ['table_view', 'Pandas', 'Data Wrangling', 'text-secondary'],
    ['calculate', 'NumPy', 'Vector Math', 'text-tertiary-fixed-dim'], ['auto_awesome', 'Generative AI', 'LLMs & RAG', 'text-primary-container'] ] },
  { id: 'bi', label: 'Business Intelligence', grid: 'grid-cols-1 sm:grid-cols-3 max-w-3xl mx-auto', pad: 'p-6', items: [
    ['bar_chart', 'Power BI', 'Microsoft Ecosystem BI', 'text-primary-container'], ['pie_chart', 'Tableau', 'Interactive Visual Analytics', 'text-secondary'],
    ['insights', 'Looker', 'Modern Semantic Layer', 'text-tertiary-fixed-dim'] ] },
]
