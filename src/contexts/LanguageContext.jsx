import React, { useState, createContext, useEffect } from 'react';
const LanguageContext = createContext();
const [language, setLanguage] = useState('MAGYAR')