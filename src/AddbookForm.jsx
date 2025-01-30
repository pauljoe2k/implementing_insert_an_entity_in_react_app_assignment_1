import React, { useState } from 'react';

const styles = {
  outer: {
    display: 'flex',
    height: '100vh',
    fontFamily: 'Poppins',
    backgroundColor: "#1f201f",
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxSizing: 'border-box',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333'
  },
  formGroup: {
    marginBottom: '16px'
  },
  label: {
    display: 'block',
    marginBottom: '6px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#555'
  },
  input: {
    width: '100%',
    padding: '8px 12px',
    fontSize: '14px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    boxSizing: 'border-box'
  },
  textarea: {
    width: '100%',
    padding: '8px 12px',
    fontSize: '14px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    minHeight: '100px',
    resize: 'vertical',
    boxSizing: 'border-box'
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#0066cc',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  }
};

const AddBookForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    coverUrl: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically handle the form submission
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div style={styles.outer}>
      <div style={styles.container}>
        <h2 style={styles.title}>Add New Book</h2>
        
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label 
              htmlFor="title" 
              style={styles.label}
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              style={styles.input}
              placeholder="Enter book title"
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label 
              htmlFor="author" 
              style={styles.label}
            >
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              style={styles.input}
              placeholder="Enter author name"
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label 
              htmlFor="description" 
              style={styles.label}
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              style={styles.textarea}
              placeholder="Enter book description"
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label 
              htmlFor="coverUrl" 
              style={styles.label}
            >
              Cover Image URL
            </label>
            <input
              type="url"
              id="coverUrl"
              name="coverUrl"
              value={formData.coverUrl}
              onChange={handleChange}
              style={styles.input}
              placeholder="Enter cover image URL"
              required
            />
          </div>

          <button
            type="submit"
            style={styles.button}
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBookForm;