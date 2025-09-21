import React, { useState } from 'react';

export default function StudentHousingSurvey() {
    const [formData, setFormData] = useState({
        stressLevel: '',
        trustLevel: '',
        studentPlatform: '',
        premiumWillingness: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = () => {
        setIsSubmitted(true);
        console.log('Survey Response:', formData);
    };

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const isFormValid = Object.values(formData).every(value => value !== '');

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
                <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-white text-2xl">✓</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
                        <p className="text-gray-600">Your survey response has been submitted successfully.</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                        <span className="text-2xl">🏠</span>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Student Housing Survey</h1>
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 border border-red-200">
                            Form: Closed
                        </span>
                    </div>
                    <p className="text-gray-600">Help us understand your housing search experience</p>
                </div>

                <div className="space-y-6">
                    {/* Question 1: Stress Level */}
                    <div className="bg-white rounded-lg shadow-lg border-0 overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="w-5 h-5 text-blue-600">📈</span>
                                <h3 className="text-lg font-semibold text-gray-900">Question 1</h3>
                            </div>
                            <p className="text-base text-gray-600">
                                How stressful do you find the process of searching for housing as a student?
                            </p>
                        </div>
                        <div className="p-6">
                            <div className="space-y-3">
                                {[
                                    { value: 'very-stressful', label: 'Very stressful' },
                                    { value: 'somewhat-stressful', label: 'Somewhat stressful' },
                                    { value: 'neutral', label: 'Neutral' },
                                    { value: 'not-very-stressful', label: 'Not very stressful' },
                                    { value: 'not-stressful', label: 'Not stressful at all' }
                                ].map((option) => (
                                    <div key={option.value} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                        <input
                                            type="radio"
                                            id={`stress-${option.value}`}
                                            name="stressLevel"
                                            value={option.value}
                                            checked={formData.stressLevel === option.value}
                                            onChange={(e) => handleInputChange('stressLevel', e.target.value)}
                                            className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                        />
                                        <label htmlFor={`stress-${option.value}`} className="flex-1 cursor-pointer text-gray-700">
                                            {option.label}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Question 2: Trust Level */}
                    <div className="bg-white rounded-lg shadow-lg border-0 overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="w-5 h-5 text-blue-600">🏠</span>
                                <h3 className="text-lg font-semibold text-gray-900">Question 2</h3>
                            </div>
                            <p className="text-base text-gray-600">
                                How much do you trust the listings you see on current property rental apps/websites?
                            </p>
                        </div>
                        <div className="p-6">
                            <select
                                value={formData.trustLevel}
                                onChange={(e) => handleInputChange('trustLevel', e.target.value)}
                                className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="">Select your trust level</option>
                                <option value="complete-trust">Complete trust</option>
                                <option value="somewhat-trust">Somewhat trust</option>
                                <option value="neutral">Neutral</option>
                                <option value="dont-really-trust">Don't really trust</option>
                                <option value="dont-trust-at-all">Don't trust at all</option>
                            </select>
                        </div>
                    </div>

                    {/* Question 3: Student Platform Preference */}
                    <div className="bg-white rounded-lg shadow-lg border-0 overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="w-5 h-5 text-blue-600">👥</span>
                                <h3 className="text-lg font-semibold text-gray-900">Question 3</h3>
                            </div>
                            <p className="text-base text-gray-600">
                                Would you prefer a housing platform designed exclusively for students?
                            </p>
                        </div>
                        <div className="p-6">
                            <div className="flex gap-8">
                                {[
                                    { value: 'yes', label: 'Yes' },
                                    { value: 'no', label: 'No' }
                                ].map((option) => (
                                    <div key={option.value} className="flex items-center space-x-2 p-4 border-2 border-gray-200 rounded-lg hover:border-blue-300 transition-colors flex-1">
                                        <input
                                            type="radio"
                                            id={`platform-${option.value}`}
                                            name="studentPlatform"
                                            value={option.value}
                                            checked={formData.studentPlatform === option.value}
                                            onChange={(e) => handleInputChange('studentPlatform', e.target.value)}
                                            className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                        />
                                        <label htmlFor={`platform-${option.value}`} className="cursor-pointer font-medium text-gray-700">
                                            {option.label}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Question 4: Premium Willingness */}
                    <div className="bg-white rounded-lg shadow-lg border-0 overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="w-5 h-5 text-blue-600">💰</span>
                                <h3 className="text-lg font-semibold text-gray-900">Question 4</h3>
                            </div>
                            <p className="text-base text-gray-600">
                                Would you be willing to pay a small premium (e.g., ₹200–₹500/month) for verified listings + roommate matching services?
                            </p>
                        </div>
                        <div className="p-6">
                            <div className="space-y-3">
                                {[
                                    { value: 'yes', label: 'Yes' },
                                    { value: 'no', label: 'No' },
                                    { value: 'maybe', label: 'Maybe / Depends on price' }
                                ].map((option) => (
                                    <div key={option.value} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                        <input
                                            type="radio"
                                            id={`premium-${option.value}`}
                                            name="premiumWillingness"
                                            value={option.value}
                                            checked={formData.premiumWillingness === option.value}
                                            onChange={(e) => handleInputChange('premiumWillingness', e.target.value)}
                                            className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                        />
                                        <label htmlFor={`premium-${option.value}`} className="flex-1 cursor-pointer text-gray-700">
                                            {option.label}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6">
                        <button
                            onClick={handleSubmit}
                            disabled={true}
                            className="w-full h-12 text-lg font-semibold bg-gray-400 cursor-not-allowed opacity-50 text-white rounded-md"
                        >
                            Form Closed - Submissions Not Accepted
                        </button>
                    </div>
                </div>

                <div className="text-center mt-6 text-sm text-gray-500">
                    All responses are anonymous and will be used for research purposes only.
                </div>
            </div>
        </div>
    );
}