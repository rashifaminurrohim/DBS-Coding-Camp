server.route({
    method: 'POST',
    path: '/user',
    handler: (request, h) => {
        return h.response('created').code(201);
    },
});

// Detailed notation
const handler = (request, h) => {
    const response = h.response('success');
    response.type('text/plain');
    response.header('Custom-Header', 'some-value');
    return response;
};

// Chained notation
const handlers = (request, h) => {
    return h.response('success')
        .type('text/plain')
        .header('Custom-Header', 'some-value');
};