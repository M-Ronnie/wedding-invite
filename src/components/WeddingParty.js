import React from 'react';
import siteConfig from '../siteConfig';
import Card from './ui/Card';

function WeddingParty() {
  const { image, maidOfHonorName, bestManName, bio } = siteConfig.weddingParty || {};

  const hasContent = image || maidOfHonorName || bestManName;

  return (
    <div className="min-h-screen bg-apple-gray-50 pt-24 pb-20">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-title font-semibold text-apple-gray-900 mb-4">
            {siteConfig.weddingParty?.title || 'Our Wedding Party'}
          </h1>
          <p className="text-lg text-apple-gray-600 max-w-2xl mx-auto">
            {siteConfig.weddingParty?.subtitle || 'Meet the amazing people standing with us'}
          </p>
        </div>

        {/* Maid of Honor & Best Man (shared photo) */}
        {hasContent ? (
          <Card className="p-8 text-center max-w-md mx-auto">
            {image && (
              <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src={image}
                  alt={`${maidOfHonorName || 'Maid of Honor'} & ${bestManName || 'Best Man'}`}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <h3 className="text-xl font-semibold text-apple-gray-900 mb-1">
              {maidOfHonorName} &amp; {bestManName}
            </h3>
            <p className="text-apple-blue-600 font-medium mb-3">
              Maid of Honor &amp; Best Man
            </p>
            {bio && <p className="text-apple-gray-600 text-sm">{bio}</p>}
          </Card>
        ) : (
          <div className="text-center py-20">
            <p className="text-apple-gray-500 text-lg">Wedding party information coming soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default WeddingParty;
